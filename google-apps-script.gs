// Google Apps Script para capturar dados do formulário da Reforma Tributária
// Cole este código no Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // ID da sua planilha do Google Sheets
    // Substitua pelo ID da sua planilha (parte da URL entre /d/ e /edit)
    const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_SUA_PLANILHA';
    
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    if (data.type === 'registration') {
      // Dados de inscrição
      const registrationSheet = getOrCreateSheet(spreadsheet, 'Inscrições', [
        'Data/Hora', 'Nome Completo', 'E-mail', 'Telefone', 'Empresa', 
        'Cargo', 'Porte da Empresa', 'Modalidade', 'Newsletter'
      ]);
      
      registrationSheet.appendRow([
        data.timestamp,
        data.fullName,
        data.email,
        data.phone,
        data.company,
        data.position,
        data.companySize,
        data.attendance,
        data.newsletter ? 'Sim' : 'Não'
      ]);
      
    } else if (data.type === 'questions') {
      // Dados de dúvidas
      const questionsSheet = getOrCreateSheet(spreadsheet, 'Dúvidas', [
        'Data/Hora', 'E-mail', 'Principais Preocupações', 'Tópicos de Interesse', 'Dúvidas Específicas'
      ]);
      
      questionsSheet.appendRow([
        data.timestamp,
        data.email,
        data.mainConcerns,
        data.selectedTopics,
        data.specificQuestions
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Dados salvos com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(spreadsheet, sheetName, headers) {
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    // Criar nova aba se não existir
    sheet = spreadsheet.insertSheet(sheetName);
    
    // Adicionar cabeçalhos
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Formatar cabeçalhos
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('#ffffff');
    
    // Auto-redimensionar colunas
    sheet.autoResizeColumns(1, headers.length);
  }
  
  return sheet;
}

// Função para testar o script (opcional)
function testScript() {
  const testData = {
    type: 'registration',
    timestamp: new Date().toLocaleString('pt-BR'),
    fullName: 'Teste',
    email: 'teste@email.com',
    phone: '(99) 99999-9999',
    company: 'Empresa Teste',
    position: 'Cargo Teste',
    companySize: 'pequena',
    attendance: 'presencial',
    newsletter: true
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  console.log(result.getContent());
}