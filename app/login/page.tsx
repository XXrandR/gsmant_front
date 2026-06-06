'use client';
import { useState } from 'react';
import { Card, Input, Button, Spinner } from '@heroui/react';
import { login } from '@/app/actions/auth';

export default function LoginPage() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async () => {
		setIsLoading(true);
		setError(null);
		const result = await login(userName, password);
		setError(result?.error || null);
		setIsLoading(false);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
			<Card className="w-full max-w-md overflow-hidden border-0 shadow-xl">
				<div className="h-1.5 bg-gradient-to-r from-red-500 to-red-600" />

				<Card.Content className="flex flex-col gap-6 p-8">
					<div className="flex flex-col gap-1 text-center">
						<h1 className="text-3xl font-bold tracking-tight text-slate-800">
							Iniciar Sesión
						</h1>
						<p className="text-sm text-slate-500">
							Pantalla de inicio de sesión del módulo de mantenimiento.
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<Input
							aria-label="Usuario"
							placeholder="Ingrese usuario"
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
							className="border-slate-200 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400/20"
						/>

						<Input
							type="password"
							aria-label="Password"
							placeholder="Ingrese contraseña"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
							className="border-slate-200 focus-within:border-red-400 focus-within:ring-1 focus-within:ring-red-400/20"
						/>
					</div>

					{error && (
						<div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700 border border-red-200 animate-in fade-in duration-200">
							{error}
						</div>
					)}

					<Button
						variant="primary"
						size="lg"
						className="w-full font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md hover:from-red-700 hover:to-red-800 transition-all duration-200 disabled:opacity-70"
						onPress={handleLogin}
						isDisabled={isLoading}
						isPending={isLoading}
					>
						{({ isPending }) => (
							<>
								{isPending ? <Spinner color="current" size="sm" /> : null}
								{isPending ? 'Ingresando...' : 'Ingresar'}
							</>
						)}
					</Button>

					<p className="text-center text-xs text-slate-400 mt-2">
						Sistema de mantenimiento © {new Date().getFullYear()}
					</p>
				</Card.Content>
			</Card>
		</div>
	);
}