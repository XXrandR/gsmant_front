"use client";
import {
	Avatar,
	Button,
	Dropdown,
	Label,
} from "@heroui/react";
import {
	ChevronDown,
	LogOut,
	User,
} from "lucide-react";
import { getProfile, logout } from '@/app/actions/auth';
import { useEffect, useState } from "react";

export function HeaderUserSection() {
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const closeSession = async () => {
		if (isLoggingOut) return;
		setIsLoggingOut(true);
		await logout();
	};
	const [username, setUsername] = useState('');
	const [role, setRole] = useState('');

	useEffect(() => {
		const fetchUserInfo = async () => {
			const result = await getProfile();
			setUsername(result.user?.name || '')
			setRole(result.user?.role || '')
		}
		fetchUserInfo();
	}, []);

	return (
		<Dropdown>
			<Button
				aria-label="Menú de usuario"
				className="h-auto w-full justify-between rounded-2xl bg-slate-950 px-3 py-2 text-white hover:bg-slate-900 sm:w-auto"
			>
				<div className="flex items-center gap-3">
					<Avatar
						className="h-9 w-9 rounded-xl bg-brand-600 text-white">
						<Avatar.Image
							alt="Blue"
							src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
						/>
					</Avatar>

					<div className="text-left leading-tight">
						<p className="text-sm font-medium">
							{username}
						</p>
						<p className="text-xs text-slate-300">
							{role}
						</p>
					</div>
				</div>

				<ChevronDown className="size-4 opacity-70" />
			</Button>

			<Dropdown.Popover className="min-w-[260px]">
				<Dropdown.Menu
					aria-label="Opciones de usuario"
					onAction={(key) => {
						console.log(key);
					}}
				>
					<Dropdown.Item
						id="profile-header"
						textValue="Perfil"
					>
						<div className="flex items-center gap-3 py-1">
							<Avatar
								className="h-10 w-10 rounded-xl bg-brand-600 text-white">
								<Avatar.Image
									alt="Blue"
									src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
								/>
							</Avatar>

							<div className="leading-tight">
								<p className="text-sm font-semibold">
									{username}
								</p>
								<p className="text-xs text-default-500">
									{role}
								</p>
							</div>
						</div>
					</Dropdown.Item>

					<Dropdown.Item
						id="profile"
						textValue="Mi perfil"
					>
						<div className="flex items-center gap-2">
							<User className="size-4" />
							<Label>
								Mi Perfil
							</Label>
						</div>
					</Dropdown.Item>

					<Dropdown.Item
						id="logout"
						textValue="Cerrar sesión"
						variant="danger"
						onClick={closeSession}
						isDisabled={isLoggingOut}
					>
						<div className="flex items-center gap-2 text-danger">
							<LogOut className="size-4" />
							<Label>
								Cerrar Sesión
							</Label>
						</div>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	);
}