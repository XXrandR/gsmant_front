'use client';

import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useRouter } from 'next/navigation';
import {
	createContext,
	useContext,
	ReactNode,
} from 'react';

interface SessionData {
    loading: boolean;
	loggedIn: boolean;
	userName: string;
	groupId: string;
}

interface SessionContextType {
	session: SessionData;
	setSession: (session: SessionData) => void;
	logout: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);
const sessionLocalStorage = atomWithStorage<SessionData>(
	'sessionStatus',
	{
        loading: true,
		loggedIn: false,
		userName: '',
		groupId: '',
	}
);

export function SessionProvider({children}: {children: ReactNode;}) {
	const [session, setSession] = useAtom(sessionLocalStorage);
	const router = useRouter();

	const logout = () => {
		setSession({
            loading: false,
			loggedIn: false,
			userName: '',
			groupId: '',
		});

		router.push('/login');
	};

	return (
		<SessionContext.Provider
			value={{
				session,
				setSession,
				logout,
			}}
		>
			{children}
		</SessionContext.Provider>
	);
}

export function useSession() {
	const context = useContext(SessionContext);

	if (!context) {
		throw new Error(
			'useSession must be used within SessionProvider'
		);
	}

	return context;
}