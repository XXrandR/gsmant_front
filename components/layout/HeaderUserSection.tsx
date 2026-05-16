"use client";

import { useSession } from "@/context/SessionContext";
import {
	Avatar,
	Button,
	Dropdown,
	Label,
} from "@heroui/react";

import {
	ChevronDown,
	LogOut,
	Settings,
	User,
} from "lucide-react";

interface HeaderUserSectionProps {
	userName: string;
	userRole: string;
}

export function HeaderUserSection({
	userName,
	userRole,
}: HeaderUserSectionProps) {
    const session = useSession()

    const closeSession = () => {
        session.logout();
    }

	return (
		<Dropdown>
			<Button
				aria-label="Menú de usuario"
				className="h-auto w-full justify-between rounded-2xl bg-slate-950 px-3 py-2 text-white hover:bg-slate-900 sm:w-auto"
			>
				<div className="flex items-center gap-3">
					<Avatar className="h-9 w-9 rounded-xl bg-brand-600 text-white" />

					<div className="text-left leading-tight">
						<p className="text-sm font-medium">
							{userName}
						</p>

						<p className="text-xs text-slate-300">
							{userRole}
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
							<Avatar className="h-10 w-10 rounded-xl bg-brand-600 text-white" />

							<div className="leading-tight">
								<p className="text-sm font-semibold">
									{userName}
								</p>

								<p className="text-xs text-default-500">
									{userRole}
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
						id="settings"
						textValue="Configuración"
					>
						<div className="flex items-center gap-2">
							<Settings className="size-4" />

							<Label>
								Configuración
							</Label>
						</div>
					</Dropdown.Item>

					<Dropdown.Item
						id="logout"
						textValue="Cerrar sesión"
						variant="danger"
                        onClick={() => closeSession()}
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