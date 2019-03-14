const MON = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export default dt => `${MON[new Date(dt).getMonth()]} ${new Date(dt).getDate().toString().padStart(2, '0')}`;
