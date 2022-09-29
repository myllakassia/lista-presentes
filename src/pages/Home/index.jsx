import React, { useState, useEffect } from "react"; //useState, useEffect são hooks que permite criar estados
// Os hooks sao funçoes que permite liga e conectar os recursos de estado e
//ciclo de vida do react a partir de componente totaltemnte funcionais
import "./styles.css";

import { Card } from "../Components/Card";

export function Home() {
  // para não ter que exportar a função abaixo usa o export na delcalaração e no main como o nome da propriedade ente { Home }

  const [studentName, setStudentName] = useState(); // o estado tem 2 elementos, função
  const [students, setStudents] = useState([]); // armazena os estudantes na lista
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    //função que adiciona o estudante com nome e hr atual mostrando na tela
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
    //atualiza a lista de estudantes.
    //O prevState(pode ser qq nome) serve para alterar o estudante
    // O ...(spred operator) serve para separa cada aluno
  }

  // pode utilizar usEeffect para consumir uma API
  useEffect(() => {
    fetch("https://api.github.com/users/myllakassia")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          // bio: data.bio, fiz um teste
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div className="avatar">
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
          {/* <p>{user.bio}</p> teste */}
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite um nome"
        onChange={(e) => setStudentName(e.target.value)} //toda vex que o conteudo input muda ele muda tbm
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card
          key={student.time} //key no react é importante add, pede isso para que a listagem fica mais perfomática. o ideal é usar ID
          name={student.name}
          time={student.time}
        />
      ))}
    </div>
  );
}
