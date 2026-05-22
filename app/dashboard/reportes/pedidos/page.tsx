"use client";

import { Button } from "@heroui/react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from "pdfmake/interfaces";

(pdfMake as any).vfs = pdfFonts.vfs;

export default function OrdenTrabajoPage() {
  const generarPDF = () => {
    const content: Content[] = [
      // =====================================================
      // HEADER
      // =====================================================

      {
        columns: [
          {
            width: "*",

            stack: [
              {
                text: "SC-F-OGM-006,28/11/2011",
                bold: true,
                fontSize: 6,
                lineHeight: 0.9,
              },

              {
                text: "CCEVASCO",
                fontSize: 6,
                lineHeight: 0.9,
              },
            ],
          },

          {
            width: "*",

            alignment: "center",

            stack: [
              {
                text: "ORDEN DE TRABAJO",
                style: "titleBlue",
              },

              {
                text: "EMPRESA DE TRANSPORTES",
                style: "titleBlue",
              },

              {
                text: "PERU BUS S.A",
                style: "titleBlue",
              },
            ],
          },

          {
            width: "*",

            alignment: "right",

            stack: [
              {
                text: "FECHA DE IMPRESIÓN",
                bold: true,
                fontSize: 6,
                lineHeight: 0.9,
              },

              {
                text: "21/05/2026 11:11 a.m.",
                fontSize: 6,
                lineHeight: 0.9,
              },
            ],
          },
        ],
      },

      {
        text: "",
        margin: [0, 4],
      },

      // =====================================================
      // TABLA PRINCIPAL
      // =====================================================

      {
        table: {
          widths: [60, 58, 55, 70, 38, "*"],

          body: [
            [
              {
                text: "NRO.OT:",
                style: "label",
                border: [true, true, false, false],
              },

              {
                text: "837842",
                style: "value",
                border: [false, true, true, false],
              },

              {
                text: "EQUIPO:",
                style: "label",
                border: [true, true, false, false],
              },

              {
                text: "0732",
                style: "value",
                border: [false, true, true, false],
              },

              {
                text: "PLACA:",
                style: "label",
                border: [true, true, false, false],
              },

              {
                text: "Y2N-962",
                style: "value",
                border: [false, true, true, false],
              },
            ],

            [
              {
                text: "NRO.PLANNER:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "1045036",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "AÑO:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "2019",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "MARCA:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "SCANIA",
                style: "value",
                border: [false, false, true, false],
              },
            ],

            [
              {
                text: "FECHA INICIO:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "21/05/2026",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "TIPO REPORTE:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "COR-CORRECTIVO",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "MODELO:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "K360",
                style: "value",
                border: [false, false, true, false],
              },
            ],

            [
              {
                text: "FECHA FINAL:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "21/05/2026",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "CONDUCTOR:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "NAVEA OMAR , ROGER MANUEL",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "EJES:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "4X2 DE 2 EJES",
                style: "value",
                border: [false, false, true, false],
              },
            ],

            [
              {
                text: "HORA INICIO:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "08:00:03",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "PROGRAMA:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "4851-CORRECTIVO MECANICO BUS SCANIA K360",
                style: "value",
                border: [false, false, true, false],
                colSpan: 3,
              },
              {},
              {},
            ],

            [
              {
                text: "HORA FIN:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "08:30:03",
                style: "value",
                border: [false, false, true, false],
              },

              {
                text: "TALLER:",
                style: "label",
                border: [true, false, false, false],
              },

              {
                text: "TALLER ICA",
                style: "value",
                border: [false, false, true, false],
                colSpan: 3,
              },
              {},
              {},
            ],

            [
              {
                text: "",
                border: [false, false, false, false],
              },

              {
                text: "",
                border: [false, false, false, false],
              },

              {
                text: "MOTIVO:",
                style: "label",
                border: [false, false, false, false],
              },

              {
                text: "SACAR MUESTRA DE ACEITE DE MOTOR 12500 KM",
                style: "value",
                border: [false, false, false, false],
                colSpan: 3,
              },
              {},
              {},
            ],
          ],
        },

        layout: {
          hLineWidth: (i: number, node: any) => {
            if (i === node.table.body.length - 1) {
              return 0;
            }

            return 0.8;
          },

          vLineWidth: () => 0.8,

          paddingLeft: () => 3,
          paddingRight: () => 3,

          paddingTop: () => 1,
          paddingBottom: () => 1,
        },
      },

      {
        text: "",
        margin: [0, 5],
      },

      // =====================================================
      // TAREA
      // =====================================================

      {
        columns: [
          {
            width: "*",

            stack: [
              {
                text: "TAREA: MUESTREAR ACEITE DE MOTOR",
                bold: true,
                fontSize: 7,
                lineHeight: 0.9,
              },

              {
                text: "ACTIVIDAD: ACEITE DE MOTOR",
                bold: true,
                color: "blue",
                fontSize: 6.5,
                margin: [0, 1, 0, 0],
                lineHeight: 0.9,
              },
            ],
          },

          {
            width: 140,

            alignment: "right",

            text: "TIEMPO.ACTI   30 MIN",

            bold: true,

            fontSize: 6.5,

            margin: [0, 5, 0, 0],
          },
        ],
      },

      {
        text: "",
        margin: [0, 3],
      },

      // =====================================================
      // TABLA PERSONAL
      // =====================================================

      {
        table: {
          headerRows: 1,

          widths: [120, "*", 80, 80],

          body: [
            [
              {
                text: "PUESTO",
                style: "tableHeader",
              },

              {
                text: "TRABAJADOR",
                style: "tableHeader",
              },

              {
                text: "INICIO",
                style: "tableHeader",
              },

              {
                text: "FIN",
                style: "tableHeader",
              },
            ],

            [
              "TECNICO MECANICO 1A",
              "ROJAS SOTO,DANNY YOLINO",
              "21/05/2026 08:00:00a. m.",
              "21/05/2026 08:30:00a. m.",
            ],
          ],
        },

        layout: {
          hLineWidth: () => 0.8,
          vLineWidth: () => 0.8,

          paddingLeft: () => 2,
          paddingRight: () => 2,

          paddingTop: () => 1,
          paddingBottom: () => 1,
        },

        fontSize: 6,
      },

      {
        text: "",
        margin: [0, 4],
      },

      // =====================================================
      // COMPONENTES
      // =====================================================

      {
        table: {
          headerRows: 1,

          widths: ["*", "*", "*", "*", 80],

          body: [
            [
              {
                text: "SECCION",
                style: "tableHeader",
              },

              {
                text: "SUB SECCION",
                style: "tableHeader",
              },

              {
                text: "COMPONENTE",
                style: "tableHeader",
              },

              {
                text: "ARTICULO",
                style: "tableHeader",
              },

              {
                text: "CANTIDAD",
                style: "tableHeader",
              },
            ],

            ["", "", "", "", ""],
          ],
        },

        layout: {
          hLineWidth: () => 0.8,
          vLineWidth: () => 0.8,

          paddingLeft: () => 2,
          paddingRight: () => 2,

          paddingTop: () => 1,
          paddingBottom: () => 1,
        },

        fontSize: 6,
      },

      {
        text: "",
        margin: [0, 18],
      },

      // =====================================================
      // AUTORIZADO
      // =====================================================

      {
        columns: [
          {
            width: 110,

            text: "AUTORIZADO POR :",

            bold: true,

            fontSize: 6.5,
          },

          {
            width: "*",

            text: "CUYA SAIRE,JHAN CARLOS",

            fontSize: 6.5,
          },
        ],
      },

      {
        text: "",
        margin: [0, 18],
      },

      // =====================================================
      // FIRMAS
      // =====================================================

      {
        columns: [
          {
            width: "*",

            stack: [
              {
                canvas: [
                  {
                    type: "line",
                    x1: 55,
                    y1: 0,
                    x2: 180,
                    y2: 0,
                    lineWidth: 0.8,
                  },
                ],
              },

              {
                text: "Firma del Solicitante",
                alignment: "center",
                bold: true,
                fontSize: 6,
                margin: [0, 2, 0, 0],
              },
            ],
          },

          {
            width: "*",

            stack: [
              {
                canvas: [
                  {
                    type: "line",
                    x1: 55,
                    y1: 0,
                    x2: 180,
                    y2: 0,
                    lineWidth: 0.8,
                  },
                ],
              },

              {
                text: "Firma de Responsable",
                alignment: "center",
                bold: true,
                fontSize: 6,
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
      },

      {
        text: "",
        margin: [0, 5],
      },

      // =====================================================
      // PEDIDOS
      // =====================================================

      {
        margin: [60, 0, 60, 0],

        table: {
          widths: ["*", "*", "*", "*", "*"],

          body: [
            [
              {
                text: "Pedidos Relacionados:",
                colSpan: 5,
                bold: true,
                color: "blue",
                fillColor: "#efefef",
                fontSize: 7,
                margin: [5, 2, 0, 2],
              },
              {},
              {},
              {},
              {},
            ],

            [
              {
                text: "Nro. Pedido",
                style: "tableHeaderBlue",
              },

              {
                text: "Empresa",
                style: "tableHeaderBlue",
              },

              {
                text: "Almacen",
                style: "tableHeaderBlue",
              },

              {
                text: "Fecha Pedido",
                style: "tableHeaderBlue",
              },

              {
                text: "Estado",
                style: "tableHeaderBlue",
              },
            ],

            ["-", "-", "-", "-", "-"],
          ],
        },

        layout: {
          hLineWidth: (i: number) => {
            if (i === 2) return 0.8;
            return 0;
          },

          vLineWidth: () => 0,

          paddingLeft: () => 2,
          paddingRight: () => 2,

          paddingTop: () => 1,
          paddingBottom: () => 1,
        },

        fontSize: 6,
      },
    ];

    const styles: StyleDictionary = {
      titleBlue: {
        fontSize: 7,
        bold: true,
        color: "blue",
        lineHeight: 0.9,
      },

      label: {
        bold: true,
        fontSize: 6.5,
        lineHeight: 0.9,
      },

      value: {
        fontSize: 6.5,
        lineHeight: 0.9,
      },

      tableHeader: {
        bold: true,
        alignment: "center",
        fontSize: 6.5,
      },

      tableHeaderBlue: {
        bold: true,
        color: "blue",
        alignment: "center",
        fontSize: 6.5,
      },
    };

    const documentDefinition: TDocumentDefinitions = {
      pageSize: "A4",

      pageMargins: [25, 38, 25, 18],

      defaultStyle: {
        fontSize: 6.5,
        lineHeight: 0.9,
      },

      footer: (currentPage) => ({
        text: currentPage.toString(),
        alignment: "right",
        margin: [0, 0, 12, 0],
        fontSize: 6,
      }),

      content,

      styles,
    };

    pdfMake.createPdf(documentDefinition).open();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Orden de Trabajo</h1>

      <Button color="primary" onPress={generarPDF}>
        Generar PDF
      </Button>
    </div>
  );
}
