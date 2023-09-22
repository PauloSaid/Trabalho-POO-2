## Utilizado:

- Typescript
- Prisma
- Draw.io

## Contribuintes:

- [Paulo Said](https://github.com/PauloSaid)
- [Matheus Muruci](https://github.com/Matheusmslopes)

## Minimundo

O Inovaweek é uma semana proposta pela Universidade de Vila Velha com afim de apresentar propostas inovadoras para o mercado. Durante essa semana, o Inova recebe diversos projetos desenvolvidos por alunos da universidade. Cada projeto, de no máximo quatro alunos, serão julgados por professores e outros estudantes, no qual as apresentações deste projeto possuem dia e hora marcadas, uma vez que os estandes serão usados por diferentes grupos em diferentes dias.
Os grupos que estão participando do Inovaweek terão um nome, um aluno designado como líder, e um nome para seu projeto. Simultaneamente, os alunos serão identificados pela sua matrícula, nome, e-mail e telefone. Por fim, os professores possuirão um nome e e-mail.

## Diagrama de classe

Como o diagrama está sendo modificado constantemente, quando estiver estável/100% correto eu coloco a foto aqui.

# Preparando o ambiente

Siga os seguintes passos para inicializar o trabalho

```npm init -y```

## Instalar o Typescript

```npm install typescript --save-dev```

## Inicializar e Configurar o Typescript

```npx tsc --init```

## Formato do tsconfig.json recomendado:

```{
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Instalando o Prisma (ORM):

```npm install prisma --save-dev```

```npx prisma init --datasource-provider sqlite```

## Como compilar o projeto

```npx tsc``` - Transforma typscript -> javascript :

```node ./dist/nome.js``` - roda o código que anteriormente foi passado para javascript.
