import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os


class EmailSender:
    def __init__(self):
        self.smtp_server = os.environ['SMTP_SERVER']
        self.smtp_port = int(os.environ['SMTP_PORT'])
        self.smtp_user = os.environ['SMTP_USER']
        self.smtp_pass = os.environ['SMTP_PASS']

    def send_email(self, email_recipient, boleto):
        msg = self._create_menssage_recipient_email(email_recipient, boleto)
        try:
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.smtp_user, self.smtp_pass)
            server.sendmail(self.smtp_user, email_recipient, msg.as_string())
            server.quit()
            print(f"E-mail enviado para {email_recipient}")
        except Exception as e:
            print(f"Erro ao enviar e-mail: {email_recipient} error: {e}")

    def _create_menssage_recipient_email(self, email_recipient, boleto):
        email = MIMEMultipart()
        email['From'] = self.smtp_user
        email['To'] = email_recipient
        email['Subject'] = 'Boleto de Cobrança'
        mensagem = """
                Olá,
                
                Parabéns seu Boleto chegou!
                
                Atenciosamente,
                fulano de tal
                """
        email.attach(MIMEText(mensagem, 'plain'))
        attachment = MIMEText(str(boleto))
        attachment.add_header('Content-Disposition', 'attachment', filename='boleto.txt')
        email.attach(attachment)
        return email
