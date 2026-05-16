import {
	Button,
	Card,
	Input,
	Select,
} from "@heroui/react";

export function AsientosPanel() {
	return (
		<div className="flex flex-col gap-4">
			<div>
				<h3 className="text-lg font-semibold">
					Configuración de Asientos
				</h3>

				<p className="mt-1 text-sm text-default-500">
					Defina distribución,
					columnas y numeración.
				</p>
			</div>

			<div className="flex flex-col gap-4 rounded-xl border border-default-200 p-4 xl:flex-row xl:items-center xl:justify-between">
				<div className="flex items-start gap-3">
					<div className="relative mt-1 h-5 w-10 rounded-full bg-primary">
						<div className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white" />
					</div>

					<div>
						<p className="text-sm font-medium">
							Generar numeración
							automática
						</p>

						<p className="text-xs text-default-500">
							La numeración se
							asignará automáticamente.
						</p>
					</div>
				</div>

				<Button
					variant="primary"
					className="w-full xl:w-auto"
				>
					Generar distribución
				</Button>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">

                 {/* DISTRIBUCION */}
                 <Card className="border border-default-200">
                     <Card.Content className="p-2">
                         <p className="mb-3 text-sm font-medium">
                             Tipo de distribución
                         </p>
                         <div className="flex gap-2">
                             <Button variant="primary">
                                 2 x 2
                             </Button>
                             <Button variant="outline">
                                 2 x 1
                             </Button>
                             <Button variant="outline">
                                 1 x 1
                             </Button>
                         </div>
                     </Card.Content>
                 </Card>

                 {/* PISO */}
                 <Card className="border border-default-200">
                     <Card.Content className="p-2">
                         <p className="mb-3 text-sm font-medium">
                             Piso del vehículo
                         </p>
                         <div className="flex flex-row gap-2">
                             <Button variant="primary">
                                 Un piso
                             </Button>
                             <Button variant="outline">
                                 Doble piso
                             </Button>
                         </div>
                     </Card.Content>
                 </Card>

                 {/* FILAS */}
                 <Card className="border border-default-200">
                     <Card.Content className="p-2">
                         <p className="mb-3 text-sm font-medium">
                             Cantidad de filas
                         </p>
                         <Input
                             type="number"
                             defaultValue="13"
                         />
                         <p className="mt-2 text-xs text-default-500">
                             Incluye filas del 1 al 13
                         </p>
                     </Card.Content>
                 </Card>

                 {/* PASILLO */}
                 <Card className="border border-default-200">
                     <Card.Content className="p-2">
                         <p className="mb-3 text-sm font-medium">
                             Pasillo
                         </p>
                         <Select
                             placeholder="Seleccione"
                         >
                         </Select>
                         <p className="mt-2 text-xs text-default-500">
                             Posición del pasillo
                         </p>
                     </Card.Content>
                 </Card>

			</div>

			<div className="overflow-x-auto rounded-xl border border-default-200">
				<div className="border-b border-default-200 px-4 py-3">
					<h4 className="font-semibold">
						Vista de datos
					</h4>
				</div>

				<table className="min-w-[900px] w-full border-collapse text-sm">
					<thead className="bg-default-100">
						<tr>
							<th className="p-3 text-left">
								#
							</th>
							<th className="p-3 text-left">
								Fila
							</th>
							<th className="p-3 text-left">
								Columna
							</th>
							<th className="p-3 text-left">
								Lado
							</th>
							<th className="p-3 text-left">
								Posición
							</th>
							<th className="p-3 text-left">
								Ubicación
							</th>
							<th className="p-3 text-left">
								Índice
							</th>
							<th className="p-3 text-left">
								N° Asiento
							</th>
						</tr>
					</thead>

					<tbody>
                         <tr>
                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 Izquierda
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 V
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 I
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>
                         </tr>

                         <tr>
                             <td className="border-b border-default-100 p-3">
                                 2
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 2
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 Izquierda
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 P
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 I
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 2
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 2
                             </td>
                         </tr>

                         <tr>
                             <td className="border-b border-default-100 p-3">
                                 3
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 1
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 3
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 Derecha
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 P
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 D
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 3
                             </td>

                             <td className="border-b border-default-100 p-3">
                                 3
                             </td>
                         </tr>

                         <tr>
                             <td className="p-3">
                                 4
                             </td>

                             <td className="p-3">
                                 1
                             </td>

                             <td className="p-3">
                                 4
                             </td>

                             <td className="p-3">
                                 Derecha
                             </td>

                             <td className="p-3">
                                 V
                             </td>

                             <td className="p-3">
                                 D
                             </td>

                             <td className="p-3">
                                 4
                             </td>

                             <td className="p-3">
                                 4
                             </td>
                         </tr>
					</tbody>
				</table>
			</div>

			<div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
				<p className="text-sm text-default-600">
					V = Ventana, P = Pasillo
					&nbsp; | &nbsp; I =
					Izquierda, D = Derecha
				</p>
			</div>
		</div>
	);
}
