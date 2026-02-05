import React from 'react';
import { 
  MantineProvider, 
  Container, 
  Table, 
  Card, 
  Text, 
  Progress, 
  Badge, 
  Group, 
  SimpleGrid, 
  Title, 
  Button,
  AppShell
} from '@mantine/core';
import candidateData from './candidates.json';

export default function App() {
  const top10 = [...candidateData]
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 10);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell padding="md" header={{ height: 60 }}>
        <AppShell.Header p="md">
          <Title order={3} color="blue">G CP Recycling Manager Selection</Title>
        </AppShell.Header>

        <AppShell.Main>
          <Container size="xl">
            
            <Title order={2} mb="lg">🏆 Candidate Leaderboard (Top 10)</Title>
            <Table striped highlightOnHover withTableBorder mb="xl">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Rank</Table.Th>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Experience</Table.Th>
                  <Table.Th>Total Score</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {top10.map((c, i) => (
                  <Table.Tr key={c.id}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td><strong>{c.name}</strong></Table.Td>
                    <Table.Td>{c.experience} Years</Table.Td>
                    <Table.Td>
                      <Badge color="teal" variant="filled">{c.totalScore}</Badge>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>

            <Title order={2} mb="lg" mt="xl">👥 All Candidate Profiles</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {candidateData.map((c) => (
                <Card key={c.id} shadow="sm" padding="lg" radius="md" withBorder>
                  <Group position="apart" mb="xs">
                    <Text fw={700}>{c.name}</Text>
                    <Badge color="blue" variant="light">{c.experience}Y Exp</Badge>
                  </Group>

                  <Text size="sm" c="dimmed" mb="md">
                    Skills: {c.skills}
                  </Text>


                  <Text size="xs" mt="sm">Crisis Management: {c.crisisScore}%</Text>
                  <Progress value={c.crisisScore} color="red" size="sm" mb="xs" />

                  <Text size="xs">Sustainability: {c.sustainabilityScore}%</Text>
                  <Progress value={c.sustainabilityScore} color="green" size="sm" mb="xs" />

                  <Text size="xs">Team Motivation: {c.motivationScore}%</Text>
                  <Progress value={c.motivationScore} color="indigo" size="sm" mb="md" />

      
                  <Button fullWidth mt="md" radius="md" color="blue" variant="outline">
                    Share Candidate
                  </Button>
                </Card>
              ))}
            </SimpleGrid>

          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}