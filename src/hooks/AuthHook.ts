'use client'

import { axiosInstance } from '@/lib/axios'
import axios from 'axios';
export function useAuthHook() {
    const { service1Axios } = axiosInstance();
    const signIn = async (email: string, password: string) => {
        try {
            const response = await service1Axios.post('/auth/signin', {
            email,
            password,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const signUp = async (email: string, password: string) => {
        try {
            const response = await service1Axios.post('/auth/signup', {
            email,
            password,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const authorizeGoogle = async (code: string) => {
        try {
            const res = await service1Axios.post('/auth/exchange',null,
            { params: { auth_code: code } }
            );
            return res.data;
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('HTTP', err.response?.status, err.response?.data);
            } else {
                console.error('Unexpected error', err);
            }
            throw err;
        }
    };

    return {
        signIn,
        signUp,
        authorizeGoogle
    };
}