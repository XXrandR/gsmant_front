import { redirect } from 'next/navigation';

export default function HomePage() {
	redirect('/dashboard/inicio/indicador-general');
}