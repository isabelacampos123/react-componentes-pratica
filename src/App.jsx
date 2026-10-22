import './App.css'
import Titulo from './components/Titulo';
import Aluno from './components/Aluno';
import Nota from './components/Nota';
import Produto from './components/Produto';

function App() {
  return (
    <div>
      <Titulo />

      <h2>Lista de Alunos</h2>
      <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
      <Aluno nome="Maria" turma="Desenvolvimento de Sistemas" />
      <Aluno nome="Beatriz" turma="Desenvolvimento de Sistemas" />


      <Nota disciplina="React" nota={8.5} />
      <Nota disciplina="React" nota={10.0} />
      <Nota disciplina="React" nota={5.5} />

      <Produto
        nome="Mouse"
        descricao="Mouse com iluminação RGB"
        preco={120}
        disponivel={true}
      />

      <Produto
        nome="Teclado"
        descricao="Teclado com iluminação RGB"
        preco={350}
        disponivel={false}
      />

      <Produto
        nome="Monitor"
        descricao="Monitor LG 24 Full HD 100Hz"
        preco={650}
        disponivel={true}
      />

      <Produto
        nome="Computador Completo 2Eletro Speed Intel Core i5"
        descricao="É uma solução de desktop voltada para o uso de escritório, estudos e tarefas 
        do dia a dia, com opções de configuração que variam entre 8GB ou 16GB de RAM e SSDs de 256GB a 1TB"
        preco={1800}
        disponivel={false}
      />
    </div>
  );
}
export default App;
