import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    const [transactions, setTransactions] = useState<Transaction[]>([
        { id: '1', date: 'OCT 14', amount: 2400.0, description: 'Consulting Services', type: 'INCOME' },
        { id: '2', date: 'OCT 12', amount: 450.2, description: 'Cloud Infrastructure', type: 'EXPENSE' },
        { id: '3', date: 'OCT 10', amount: 12.5, description: 'Operating Expense', type: 'EXPENSE' },
        { id: '4', date: 'OCT 08', amount: 1120.0, description: 'Development Project', type: 'INCOME' },
        { id: '5', date: 'OCT 05', amount: 2199.0, description: 'Asset Purchase', type: 'EXPENSE' },
    ]);

    const addTransaction = (t: Omit<Transaction, 'id'>) => {
        const newTransaction = { ...t, id: Math.random().toString(36).substring(7) };
        setTransactions([newTransaction, ...transactions]);
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

    const [assignments, setAssignments] = useState<Assignment[]>([
        { id: '1', title: 'Quarterly Audit', progress: 75 },
        { id: '2', title: 'Research Phase', progress: 40 },
    ]);

    const updateAssignmentProgress = (id: string, progress: number) => {
        setAssignments(assignments.map(a => a.id === id ? { ...a, progress } : a));
    };

    const addAssignment = (title: string) => {
        setAssignments([{ id: Math.random().toString(36).substring(7), title, progress: 0 }, ...assignments]);
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
