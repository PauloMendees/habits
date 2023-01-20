export default function useCreateHabit() {
  const weekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const monday = (document.getElementById('Domingo-checkbox') as HTMLButtonElement).dataset.state;
    console.log(monday);
  };

  return { weekDays, onSubmit };
}
