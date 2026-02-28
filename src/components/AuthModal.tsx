import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { X, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login, signup } = useAuth();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (isLogin) {
                await login({ email, password });
                toast.success('Welcome back to DOME');
            } else {
                await signup({ email, password });
                toast.success('DOME Account created successfully');
            }
            onClose();
            navigate('/dashboard');
        } catch (error: any) {
            const message = error.response?.data?.message || 'Authentication failed. Please try again.';
            toast.error(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-[#111] border border-white/20 rounded-3xl w-full max-w-md p-8 relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 rounded-lg bg-white text-black flex items-center justify-center font-black text-lg tracking-tighter">
                            D
                        </div>
                        <span className="font-bold text-lg tracking-widest uppercase">DOME OS</span>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">
                        {isLogin ? 'Welcome Back' : 'Initialize Account'}
                    </h2>
                    <p className="text-gray-400 mt-2">
                        {isLogin ? 'Enter your credentials to access your workspace.' : 'Create a new DOME instance for your productivity.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="pilot@dome.os"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-gray-200 transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : null}
                        {isLogin ? 'Access Workspace' : 'Initialize Workspace'}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        type="button"
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm font-bold text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline"
                    >
                        {isLogin ? "Don't have an instance? Create one." : "Already have an instance? Log in."}
                    </button>
                </div>
            </div>
        </div>
    );
}
