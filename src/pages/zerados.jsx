import "../app/globals.css";
import { useState, useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";

import { Icon } from "@iconify/react";

import Navbar from "@/components/navbar";

export default function Zerados() {
  const [status, setStatus] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [jogos, setJogos] = useState([]);
  const [editandoJogoId, setEditandoJogoId] = useState(null);

  useEffect(() => {
    // Carregar os jogos do localStorage
    const jogosLocalStorage = JSON.parse(localStorage.getItem("jogos")) || [];
    // Filtrar apenas os jogos com status "Flopado"
    const jogosZerados = jogosLocalStorage.filter(
      (jogo) => jogo.status === "Zerado"
    );
    setJogos(jogosZerados);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoJogo = {
      id: jogos.length + 1, // Gere um novo ID baseado no comprimento atual do array + 1
      status: status,
      plataforma: plataforma,
      nome: nome,
      categoria: categoria,
      valor: valor,
    };

    // Adicionar o novo jogo ao array
    const jogosAtualizados = [...jogos, novoJogo];

    // Atualizar o estado local dos jogos
    setJogos(jogosAtualizados);

    // Salvar o array atualizado de volta no localStorage
    localStorage.setItem("jogos", JSON.stringify(jogosAtualizados));

    // Limpar os campos do formulário
    setStatus("");
    setPlataforma("");
    setNome("");
    setCategoria("");
    setValor("");
    console.log(jogosAtualizados);
  };

  return (
    <div className="p-10 mx-auto flex flex-col justify-center gap-12">
      <Navbar></Navbar>
      <div className="flex align-middle justify-between items-center">
        <h1 className="text-3xl">Lista de jogos ZERADOS:</h1>

        <Dialog>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar jogo</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status:
                </Label>
                <select
                  id="status"
                  value={status}
                  onChange={(ev) => setStatus(ev.target.value)}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="Desejado">Desejado</option>
                  <option value="Jogando">Jogando</option>
                  <option value="Zerado">Zerado</option>
                  <option value="Platinado">Platinado</option>
                  <option value="Flopado">Flopado</option>
                </select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="platform" className="text-right">
                  Plataforma:
                </Label>
                <Input
                  id="platform"
                  className="col-span-3"
                  value={plataforma}
                  onChange={(ev) => setPlataforma(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome:
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  value={nome}
                  onChange={(ev) => setNome(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Categoria:
                </Label>
                <Input
                  id="category"
                  className="col-span-3"
                  value={categoria}
                  onChange={(ev) => setCategoria(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="value" className="text-right">
                  Valor pago (R$):
                </Label>
                <Input
                  id="value"
                  className="col-span-3"
                  value={valor}
                  onChange={(ev) => setValor(ev.target.value)}
                />
              </div>
              <DialogFooter>
                <Button onClick={handleSubmit}>Adicionar</Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[150px]">Plataforma</TableHead>
            <TableHead className="w-[800px]">Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jogos.map((jogo) => {
            return (
              <TableRow key={jogo.id}>
                <TableCell className="font-medium">{jogo.status}</TableCell>
                <TableCell>{jogo.plataforma}</TableCell>
                <TableCell>{jogo.nome}</TableCell>
                <TableCell>{jogo.categoria}</TableCell>
                <TableCell className="text-right">{`R$${jogo.valor}`}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
