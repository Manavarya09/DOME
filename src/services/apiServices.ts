import api from './api';

export const AuthService = {
    login: async (credentials: any) => {
        const response = await api.post('/auth/login', credentials);
        if (response.data?.data?.token) {
            localStorage.setItem('dome_token', response.data.data.token);
            localStorage.setItem('dome_user', JSON.stringify(response.data.data.user));
        }
        return response.data;
    },
    signup: async (userData: any) => {
        const response = await api.post('/auth/signup', userData);
        if (response.data?.data?.token) {
            localStorage.setItem('dome_token', response.data.data.token);
            localStorage.setItem('dome_user', JSON.stringify(response.data.data.user));
        }
        return response.data;
    },
    logout: () => {
        localStorage.removeItem('dome_token');
        localStorage.removeItem('dome_user');
    },
    getCurrentUser: () => {
        const userStr = localStorage.getItem('dome_user');
        return userStr ? JSON.parse(userStr) : null;
    }
};

export const FinanceService = {
    getTransactions: async (filters?: { category?: string; startDate?: string; endDate?: string }) => {
        const response = await api.get('/finance', { params: filters });
        return response.data;
    },
    createTransaction: async (data: any) => {
        const response = await api.post('/finance', data);
        return response.data;
    },
    updateTransaction: async (id: string, data: any) => {
        const response = await api.put(`/finance/${id}`, data);
        return response.data;
    },
    deleteTransaction: async (id: string) => {
        const response = await api.delete(`/finance/${id}`);
        return response.data;
    }
};

export const AssignmentService = {
    getAssignments: async (filters?: { status?: 'pending' | 'completed' }) => {
        const response = await api.get('/assignments', { params: filters });
        return response.data;
    },
    createAssignment: async (data: any) => {
        const response = await api.post('/assignments', data);
        return response.data;
    },
    updateAssignment: async (id: string, data: any) => {
        const response = await api.put(`/assignments/${id}`, data);
        return response.data;
    },
    deleteAssignment: async (id: string) => {
        const response = await api.delete(`/assignments/${id}`);
        return response.data;
    }
};

export const DashboardService = {
    getSummary: async () => {
        const response = await api.get('/dashboard');
        return response.data;
    }
};
