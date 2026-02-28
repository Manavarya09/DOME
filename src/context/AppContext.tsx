import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { FinanceService, AssignmentService } from '../services/apiServices';

export type TransactionType = 'INCOME' | 'EXPENSE';

export interface Transaction {
    id: string;
    date: string;
    amount: number;
    description: string;
    type: TransactionType;
}

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface Assignment {
    id: string;
    title: string;
    progress: number;
}

export interface StudySession {
    id: string;
    day: string;
    subject: string;
    completed: boolean;
}

export interface Note {
    id: string;
    title: string;
    preview: string;
    date: string;
}

interface AppContextType {
    transactions: Transaction[];
    addTransaction: (t: Omit<Transaction, 'id'>) => void;
    tasks: Task[];
    toggleTask: (id: string) => void;
    addTask: (title: string) => void;
    assignments: Assignment[];
    updateAssignmentProgress: (id: string, progress: number) => void;
    addAssignment: (title: string) => void;
    studySessions: StudySession[];
    toggleStudySession: (id: string) => void;
    addStudySession: (day: string, subject: string) => void;
    notes: Note[];
    addNote: (title: string, preview: string) => void;
}

const defaultContext: AppContextType = {
    transactions: [],
    addTransaction: () => { },
    tasks: [],
    toggleTask: () => { },
    addTask: () => { },
    assignments: [],
    updateAssignmentProgress: () => { },
    addAssignment: () => { },
    studySessions: [],
    toggleStudySession: () => { },
    addStudySession: () => { },
    notes: [],
    addNote: () => { },
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuth();

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);

    const fetchData = async () => {
        try {
            const [financeRes, assignRes] = await Promise.all([
                FinanceService.getTransactions(),
                AssignmentService.getAssignments()
            ]);

            if (financeRes?.data) setTransactions(financeRes.data);
            if (assignRes?.data) setAssignments(assignRes.data);
        } catch (error) {
            console.error('Error fetching context data:', error);
        }
    };

    const addTransaction = async (t: Omit<Transaction, 'id'>) => {
        try {
            const res = await FinanceService.createTransaction(t);
            if (res?.data) {
                setTransactions([res.data, ...transactions]);
            }
        } catch (error) {
            console.error('Failed to create transaction', error);
        }
    };

    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', title: 'Review Q3 Report', completed: false },
        { id: '2', title: 'Email Client', completed: true },
        { id: '3', title: 'Update Software', completed: false },
    ]);

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const addTask = (title: string) => {
        setTasks([{ id: Math.random().toString(36).substring(7), title, completed: false }, ...tasks]);
    };

    const [assignments, setAssignments] = useState<Assignment[]>([]);

    const updateAssignmentProgress = async (id: string, progress: number) => {
        try {
            // Mapping progress into Backend status: >50% means completed for simplicity of DB schema
            const status = progress >= 100 ? 'completed' : 'pending';
            await AssignmentService.updateAssignment(id, { status });
            setAssignments(assignments.map(a => a.id === id ? { ...a, progress } : a));
        } catch (error) {
            console.error('Failed to update assignment', error);
        }
    };

    const addAssignment = async (title: string) => {
        try {
            const res = await AssignmentService.createAssignment({ title, status: 'pending' });
            if (res?.data) {
                setAssignments([{ ...res.data, progress: 0 }, ...assignments]);
            }
        } catch (error) {
            console.error('Failed to add assignment', error);
        }
    };

    const [studySessions, setStudySessions] = useState<StudySession[]>([
        { id: '1', day: 'Mon', subject: 'Math', completed: true },
        { id: '2', day: 'Tue', subject: 'Hist', completed: false },
        { id: '3', day: 'Wed', subject: 'Sci', completed: false },
    ]);

    const toggleStudySession = (id: string) => {
        setStudySessions(studySessions.map(s => s.id === id ? { ...s, completed: !s.completed } : s));
    };

    const addStudySession = (day: string, subject: string) => {
        setStudySessions([...studySessions, { id: Math.random().toString(36).substring(7), day, subject, completed: false }]);
    };

    const [notes, setNotes] = useState<Note[]>([
        { id: '1', title: 'Monochrome transition', preview: 'Meeting with design team regarding the monochrome transition. Needs to be high contrast.', date: '10:23 AM' },
        { id: '2', title: 'Project Alpha', preview: 'Review current design assets and establish texture library.', date: 'Yesterday' },
    ]);

    const addNote = (title: string, preview: string) => {
        setNotes([{ id: Math.random().toString(36).substring(7), title, preview, date: 'Just now' }, ...notes]);
    };

    return (
        <AppContext.Provider
            value={{
                transactions,
                addTransaction,
                tasks,
                toggleTask,
                addTask,
                assignments,
                updateAssignmentProgress,
                addAssignment,
                studySessions,
                toggleStudySession,
                addStudySession,
                notes,
                addNote,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
