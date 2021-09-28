import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Pessoa } from "src/app/models/pessoa";
import { PessoaService } from "src/app/services/pessoa.service";

@Component({
  selector: "app-cadastrar-pessoa",
  templateUrl: "./cadastrar-pessoa.component.html",
  styleUrls: ["./cadastrar-pessoa.component.css"],
})
export class CadastrarPessoaComponent implements OnInit {

  nome!: string;
  nascimento!: Date;
  cpf!: string;
  sexo!: string;

  constructor(private service: PessoaService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    let pessoa: Pessoa = {
        nome: this.nome,
        nascimento: this.nascimento,
        cpf: this.cpf,
        sexo: this.sexo,
    };
    this.service.create(pessoa).subscribe((pessoa) => {
        this.router.navigate(["pessoa/listar"]);
    });
}

}
