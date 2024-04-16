import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1 className="text-3xl font-bold ">GAMEGUIDE</h1>
      <div className="flex gap-2">
        <Link href={"/"}>
          <Button className="flex flex-row gap-2 bg-blue-600">
            <Icon icon="material-symbols:gamepad" />
            Gerenciar
          </Button>
        </Link>
        <Link href={"/desejados"}>
          <Button className="flex flex-row gap-2 bg-blue-400">
            <Icon icon="material-symbols:heart-check" />
            Desejos
          </Button>
        </Link>
        <Link href={"/jogando"}>
          <Button className="flex flex-row gap-2 bg-gray-600">
            <Icon icon="material-symbols:stadia-controller" />
            Jogando
          </Button>
        </Link>
        <Link href={"/zerados"}>
          <Button className="flex flex-row gap-2 bg-green-700">
            <Icon icon="material-symbols:library-add-check" />
            Zerados
          </Button>
        </Link>
        <Link href={"/platinados"}>
          <Button className="flex flex-row gap-2 bg-yellow-600">
            <Icon icon="material-symbols:diamond-rounded" />
            Platinados
          </Button>
        </Link>
        <Link href={"/flopados"}>
          <Button className="flex flex-row gap-2 bg-red-400">
            <Icon icon="material-symbols:restore-from-trash" />
            Flopados
          </Button>
        </Link>
      </div>
    </nav>
  );
}
