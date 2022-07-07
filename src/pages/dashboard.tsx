import { Header } from "../components/Header";
import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";


const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datatime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color:  theme.colors.gray[600]
        },
        categories: [
            new Date('2022-06-08T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-09T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-10T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-11T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-12T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-13T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
            new Date('2022-06-14T00:00:00Z').toLocaleString('pt-BR', {day:"2-digit", month: "short"}),
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
} as any; 
    
const series = [
    {name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]}
]

export default function Dashboard() {
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    <Chart options={options} series={series} type="area" height={160}/>
                    </Box>

                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                    <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    <Chart options={options} series={series} type="area" height={160}/>

                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}