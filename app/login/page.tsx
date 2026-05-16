'use client';
import { useSession } from '@/context/SessionContext';
import { Card, Input, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
	const router = useRouter();
	const { setSession } = useSession();
	const [userName, setUserName] = useState('');
	const [groupId, setGroupId] = useState('');

	const handleLogin = () => {
		setSession({
			loggedIn: true,
			userName: userName || 'Administrador',
			groupId: groupId || 'ADMIN',
            loading: false
		});
		router.push('/dashboard/inicio/indicador-general');
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
			<Card className="w-full max-w-md shadow-2xl border border-slate-200">
				<Card.Content className="flex flex-col gap-6 p-8">
					<div className="flex flex-col gap-1 text-center">
						<h1 className="text-3xl font-bold text-slate-800">
							Iniciar Sesión
						</h1>

						<p className="text-sm text-slate-500">
							Pantalla de inicio de session del modulo de mantenimiento.
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<Input
							aria-label="Usuario"
							placeholder="Ingrese usuario"
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
						/>

						<Input
							aria-label="Grupo"
							placeholder="ADMIN"
							value={groupId}
							onChange={(event) => setGroupId(event.target.value)}
						/>
					</div>

					<Button
						variant="primary"
						size="lg"
						className="font-semibold"
						onPress={handleLogin}
					>
						Ingresar
					</Button>
				</Card.Content>
			</Card>
		</div>
	);
}