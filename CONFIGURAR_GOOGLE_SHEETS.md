# 🚀 GUIA COMPLETO: Configurar Google Sheets para Capturar Formulário

## 📋 PASSO 1: Criar Google Sheets

1. **Acesse**: [sheets.google.com](https://sheets.google.com)
2. **Clique**: "Planilha em branco"
3. **Renomeie**: "Reforma Tributária - Inscrições"
4. **Copie o ID da planilha** da URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123DEF456.../edit
                                     ↑ Copie esta parte ↑
   ```

## 📝 PASSO 2: Criar Google Apps Script

1. **Acesse**: [script.google.com](https://script.google.com)
2. **Clique**: "Novo projeto"
3. **Delete** todo código padrão
4. **Cole** o código do arquivo `google-apps-script.gs`
5. **Substitua** a linha:
   ```javascript
   const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_SUA_PLANILHA';
   ```
   **Por**:
   ```javascript
   const SPREADSHEET_ID = 'SEU_ID_COPIADO_AQUI';
   ```
6. **Salve** (Ctrl+S) e nomeie: "Reforma Tributária Script"

## 🌐 PASSO 3: Implantar como Web App

1. **Clique** em "Implantar" (Deploy)
2. **Clique** em "Nova implantação" (New deployment)
3. **Clique** no ícone ⚙️ ao lado de "Selecionar tipo"
4. **Escolha**: "Aplicativo da Web" (Web app)
5. **Configure**:
   - **Descrição**: "Formulário Reforma Tributária"
   - **Executar como**: "Eu (seu-email@gmail.com)"
   - **Quem tem acesso**: "Qualquer pessoa"
6. **Clique**: "Implantar"
7. **Autorize** quando solicitado (pode pedir para revisar permissões)
8. **Copie** a URL gerada (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

## ⚙️ PASSO 4: Configurar Projeto

1. **Abra** o arquivo `.env.local` no projeto
2. **Descomente e edite** a linha:
   ```bash
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_AQUI/exec
   ```
3. **Salve** o arquivo
4. **Faça novo build**:
   ```bash
   pnpm build
   ```
5. **Upload** da nova pasta `out/` para hospedagem

## 🧪 PASSO 5: Testar

1. **Acesse** seu site
2. **Preencha** o formulário
3. **Envie** os dados
4. **Verifique** se apareceu na planilha do Google Sheets

## ❌ SOLUÇÕES PARA PROBLEMAS COMUNS

### **Erro: "Script function not found"**
- Certifique-se de que colou o código completo
- Verifique se salvou o script

### **Erro: "Permission denied"**
- Verifique se "Quem tem acesso" está como "Qualquer pessoa"
- Tente criar nova implantação

### **Dados não aparecem na planilha**
- Confirme que o ID da planilha está correto
- Verifique os logs no Apps Script (Ver > Logs de execução)

### **Erro de CORS**
- Normal! O Google Apps Script usa `no-cors` mode
- Se funcionar, os dados aparecerão na planilha

## 📊 RESULTADO

Após configurar, você terá:
- ✅ Planilha com dados organizados automaticamente
- ✅ Duas abas: "Inscrições" e "Dúvidas" 
- ✅ Cabeçalhos formatados
- ✅ Dados em tempo real

## 🔄 MANUTENÇÃO

Para ver novas inscrições:
- Acesse a planilha no Google Sheets
- Os dados aparecerão automaticamente
- Você pode exportar para Excel se necessário