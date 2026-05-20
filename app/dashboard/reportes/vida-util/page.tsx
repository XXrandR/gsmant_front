"use client";

import { Button, Card, CardHeader, Chip, Table } from "@heroui/react";

export default function VidaUtilPage() {
  return (
    <Card className="border border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
            7. Reportes
          </p>

          <h2 className="text-2xl font-semibold text-slate-900">
            Reporte de Tiempo de Vida / Estado
          </h2>
        </div>

        <div className="flex gap-2">
          <Button variant="flat">Filtrar</Button>

          <Button variant="primary">Exportar PDF</Button>
        </div>
      </CardHeader>

      <Card.Content className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Neumáticos Activos</p>

            <p className="text-3xl font-bold text-slate-900 mt-2">186</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Próximos a Cambio</p>

            <p className="text-3xl font-bold text-yellow-600 mt-2">24</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Críticos</p>

            <p className="text-3xl font-bold text-red-600 mt-2">6</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Promedio Vida Útil</p>

            <p className="text-3xl font-bold text-green-600 mt-2">72%</p>
          </Card>
        </div>

        <Card className="border border-slate-200 overflow-hidden">
          <Table aria-label="Reporte vida útil">
            <Table.ScrollContainer>
              <Table.Content className="min-w-[900px]">
                <Table.Header>
                  <Table.Column>Neumático</Table.Column>
                  <Table.Column>Vehículo</Table.Column>
                  <Table.Column>Posición</Table.Column>
                  <Table.Column>Recorrido</Table.Column>
                  <Table.Column>Vida Restante</Table.Column>
                  <Table.Column>Estado</Table.Column>
                </Table.Header>

                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>NEU-00045</Table.Cell>
                    <Table.Cell>Volvo B430R</Table.Cell>
                    <Table.Cell>Eje 2</Table.Cell>
                    <Table.Cell>84,000 km</Table.Cell>
                    <Table.Cell>74%</Table.Cell>
                    <Table.Cell>
                      <Chip color="success" size="sm">
                        Óptimo
                      </Chip>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="2">
                    <Table.Cell>NEU-00091</Table.Cell>
                    <Table.Cell>Scania K360</Table.Cell>
                    <Table.Cell>Eje 3</Table.Cell>
                    <Table.Cell>112,000 km</Table.Cell>
                    <Table.Cell>21%</Table.Cell>
                    <Table.Cell>
                      <Chip color="warning" size="sm">
                        Programado
                      </Chip>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="3">
                    <Table.Cell>NEU-00120</Table.Cell>
                    <Table.Cell>Marcopolo G7</Table.Cell>
                    <Table.Cell>Eje 1</Table.Cell>
                    <Table.Cell>140,000 km</Table.Cell>
                    <Table.Cell>5%</Table.Cell>
                    <Table.Cell>
                      <Chip color="danger" size="sm">
                        Crítico
                      </Chip>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </Card>
      </Card.Content>
    </Card>
  );
}
