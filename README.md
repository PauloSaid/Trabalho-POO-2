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

## Enviroment Setup

### 1. initialize a project and create the package.json file:

```npm init -y```

## 2. Installing Typescript

```npm install typescript --save-dev```

### 2.1

```npm install typescript ts-node @types/node --save-dev```

&&

```npm install @types/node --save-dev```


## 3. Initialize and properly configure TypeScript

```npx tsc --init```

I am actually using these configurations:

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
    "skipLibCheck": true,
    "types": ["node"]
  }
}
```

## 4. Installing Prisma (ORM)
### Installing prisma
npm install prisma --save-dev

## 5. Setting up Prisma with the init command of the Prisma CLI
### OBS.: I'm using SQLite as DBMS
npx prisma init --datasource-provider sqlite

## 6. Installing Express
### Installing express
```npm install express --save```

### 6.1 Also, you need to install express types
```npm i --save-dev @types/express```
