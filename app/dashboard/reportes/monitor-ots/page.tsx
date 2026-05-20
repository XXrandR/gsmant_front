"use client";

import { Button, Card, CardHeader, Chip, Table } from "@heroui/react";

export default function MonitorOTsPage() {
  return (
    <Card className="border border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">
            7. Reportes
          </p>

          <h2 className="text-2xl font-semibold text-slate-900">
            Monitor de Órdenes de Trabajo
          </h2>
        </div>

        <div className="flex gap-2">
          <Button variant="flat">Filtrar</Button>

          <Button variant="primary">Exportar Reporte</Button>
        </div>
      </CardHeader>

      <Card.Content className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">OTs Abiertas</p>

            <p className="text-3xl font-bold text-slate-900 mt-2">42</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">En Proceso</p>

            <p className="text-3xl font-bold text-yellow-600 mt-2">18</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Finalizadas</p>

            <p className="text-3xl font-bold text-green-600 mt-2">96</p>
          </Card>

          <Card className="border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Retrasadas</p>

            <p className="text-3xl font-bold text-red-600 mt-2">7</p>
          </Card>
        </div>

        <Card className="border border-slate-200 overflow-hidden">
          <Table aria-label="Monitor OTs">
            <Table.ScrollContainer>
              <Table.Content className="min-w-[900px]">
                <Table.Header>
                  <Table.Column>ID OT</Table.Column>
                  <Table.Column>Vehículo</Table.Column>
                  <Table.Column>Tipo</Table.Column>
                  <Table.Column>Técnico</Table.Column>
                  <Table.Column>Fecha</Table.Column>
                  <Table.Column>Estado</Table.Column>
                </Table.Header>

                <Table.Body>
                  <Table.Row key="1">
                    <Table.Cell>#OT-2048</Table.Cell>
                    <Table.Cell>Volvo B430R</Table.Cell>
                    <Table.Cell>Preventivo</Table.Cell>
                    <Table.Cell>Juan Perez</Table.Cell>
                    <Table.Cell>19/05/2026</Table.Cell>
                    <Table.Cell>
                      <Chip color="warning" size="sm">
                        En Proceso
                      </Chip>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="2">
                    <Table.Cell>#OT-2049</Table.Cell>
                    <Table.Cell>Scania K360</Table.Cell>
                    <Table.Cell>Correctivo</Table.Cell>
                    <Table.Cell>Mario Torres</Table.Cell>
                    <Table.Cell>18/05/2026</Table.Cell>
                    <Table.Cell>
                      <Chip color="danger" size="sm">
                        Retrasado
                      </Chip>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row key="3">
                    <Table.Cell>#OT-2050</Table.Cell>
                    <Table.Cell>Marcopolo G7</Table.Cell>
                    <Table.Cell>Lavado</Table.Cell>
                    <Table.Cell>Renzo Diaz</Table.Cell>
                    <Table.Cell>18/05/2026</Table.Cell>
                    <Table.Cell>
                      <Chip color="success" size="sm">
                        Finalizado
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
