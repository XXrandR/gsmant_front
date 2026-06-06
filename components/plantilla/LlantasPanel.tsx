import {
	Button,
	Card,
} from "@heroui/react";

export function LlantasPanel() {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">
                Configuración de Ejes y Neumáticos
            </h3>
            <p className="mt-1 text-sm text-default-500">
                Defina la distribución de ejes, tipos y posiciones.
            </p>
            <div className="mt-6 flex gap-2">
                <Button variant="primary">
                    + Agregar eje
                </Button>
                <Button variant="outline">
                    Eliminar
                </Button>
            </div>

            <div className="mt-6 overflow-x-auto rounded-xl border border-default-200">
                <table className="w-full border-collapse text-sm">
                    <thead className="bg-default-100">
                        <tr>
                            <th className="border-b border-default-200 p-3 text-left">
                                #
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Tipo Eje
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Eje Básico
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Posición
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Recorrido Máx. (mm)
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Remanente Min. (mm)
                            </th>
                            <th className="border-b border-default-200 p-3 text-left">
                                Opciones
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border-b border-default-100 p-3">
                                1
                            </td>
                            <td className="border-b border-default-100 p-3">
                                EJE DIRECCIONAL
                            </td>
                            <td className="border-b border-default-100 p-3">
                                EJE 1
                            </td>
                            <td className="border-b border-default-100 p-3">
                                1
                            </td>
                            <td className="border-b border-default-100 p-3">
                                30000
                            </td>
                            <td className="border-b border-default-100 p-3">
                                5
                            </td>
                            <td className="border-b border-default-100 p-3">
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                    >
                                        ✏️
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="danger-soft"
                                    >
                                        🗑
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-default-100 p-3">
                                2
                            </td>
                            <td className="border-b border-default-100 p-3">
                                EJE MOTRIZ
                            </td>
                            <td className="border-b border-default-100 p-3">
                                EJE 2
                            </td>
                            <td className="border-b border-default-100 p-3">
                                2
                            </td>
                            <td className="border-b border-default-100 p-3">
                                30000
                            </td>
                            <td className="border-b border-default-100 p-3">
                                5
                            </td>
                            <td className="border-b border-default-100 p-3">
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                    >
                                        ✏️
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="danger-soft"
                                    >
                                        🗑
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3">
                                3
                            </td>
                            <td className="p-3">
                                EJE PORTADOR
                            </td>
                            <td className="p-3">
                                EJE 3
                            </td>
                            <td className="p-3">
                                3
                            </td>
                            <td className="p-3">
                                30000
                            </td>
                            <td className="p-3">
                                5
                            </td>
                            <td className="p-3">
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                    >
                                        ✏️
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="danger-soft"
                                    >
                                        🗑
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="grid md:grid-cols-5 grid-cols-Recorrido Máx. (mm)1 gap-4">
                <Card className="border border-default-200">
                    <Card.Content className="p-4 text-center">
                        <p className="text-sm text-default-500">
                            N° de Ejes
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">
                            4
                        </p>
                    </Card.Content>
                </Card>

                <Card className="border border-default-200">
                    <Card.Content className="p-4 text-center">
                        <p className="text-sm text-default-500">
                            Ejes Direccionales
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">
                            1
                        </p>
                    </Card.Content>
                </Card>

                <Card className="border border-default-200">
                    <Card.Content className="p-4 text-center">
                        <p className="text-sm text-default-500">
                            Ejes Motrices
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">
                            2
                        </p>
                    </Card.Content>
                </Card>

                <Card className="border border-default-200">
                    <Card.Content className="p-4 text-center">
                        <p className="text-sm text-default-500">
                            Ejes Portadores
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">
                            1
                        </p>
                    </Card.Content>
                </Card>

                <Card className="border border-default-200">
                    <Card.Content className="p-4 text-center">
                        <p className="text-sm text-default-500">
                            Total Neumáticos
                        </p>
                        <p className="mt-2 text-3xl font-bold text-primary">
                            16
                        </p>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
}