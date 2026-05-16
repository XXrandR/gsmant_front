'use client'
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export default function ChecklistPanel() {
    return (
        <Card className="border border-slate-200 shadow-sm">
            <CardHeader className="px-6 py-5 border-b border-slate-200">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">7. Reportes</p>
                    <h2 className="text-2xl font-semibold text-slate-900">Checklist</h2>
                </div>
            </CardHeader>
            <Card.Content className="p-6">
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                    <Card className="border border-slate-200 p-4">
                        <p className="text-sm text-slate-500">Pendientes</p>
                        <p className="text-2xl font-bold text-slate-900 mt-2">14</p>
                    </Card>
                    <Card className="border border-slate-200 p-4">
                        <p className="text-sm text-slate-500">Completados</p>
                        <p className="text-2xl font-bold text-slate-900 mt-2">121</p>
                    </Card>
                    <Card className="border border-slate-200 p-4">
                        <p className="text-sm text-slate-500">Observaciones</p>
                        <p className="text-2xl font-bold text-slate-900 mt-2">9</p>
                    </Card>
                    <Card className="border border-slate-200 p-4">
                        <p className="text-sm text-slate-500">Sin evidencia</p>
                        <p className="text-2xl font-bold text-red-600 mt-2">3</p>
                    </Card>
                </div>
                <Card className="border border-slate-200 overflow-hidden">
                    <Table aria-label="Checklist table">
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members" className="min-w-[600px]">
                                <Table.Header>
                                    <Table.Column isRowHeader={true}>Unidad</Table.Column>
                                    <Table.Column>Fecha</Table.Column>
                                    <Table.Column>Inspector</Table.Column>
                                    <Table.Column>Resultado</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row key="1">
                                        <Table.Cell>Bus-045</Table.Cell>
                                        <Table.Cell>25/04/2026</Table.Cell>
                                        <Table.Cell>M. Salazar</Table.Cell>
                                        <Table.Cell>Con observaciones</Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="2">
                                        <Table.Cell>Carga-012</Table.Cell>
                                        <Table.Cell>25/04/2026</Table.Cell>
                                        <Table.Cell>R. Torres</Table.Cell>
                                        <Table.Cell>Conforme</Table.Cell>
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