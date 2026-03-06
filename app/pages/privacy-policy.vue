<script setup lang="ts">
const { t } = useI18n({
	useScope: "local",
});
</script>

<template>
  <UPage>
    <UContainer>
      <UPageHeader :title="t('header.title')" :description="t('header.description')" />
      <UPageBody>
        <MDC :value="t('content')" />
      </UPageBody>
    </UContainer>
  </UPage>
</template>

<i18n lang="yaml">
en:
  header:
    title: Privacy Policy
    description: How we collect, use, and protect your personal data.
  content: |
    ## 1. Overview

    This Privacy Policy explains how we collect, use, and protect your information when you use our scheduling application.

    Our goal is to collect only the minimum amount of data required to operate the service.

    ---

    ## 2. Data Collection & OAuth

    We do not use traditional password-based registration. Instead, we use third-party OAuth providers (**Google** and **GitHub**) for authentication.

    When you sign in, we may receive the following information from the provider:

    - Your name
    - Your email address
    - Your profile image (avatar)
    - A unique OAuth provider ID

    In addition, we store data that you create inside the application:

    - Schedule titles
    - Votes for specific dates
    - Basic account preferences

    **Legal basis:**  
    Data processing is carried out in accordance with **Art. 6 (1) lit. b GDPR** (performance of a contract), as the data is required to provide the service.

    ---

    ## 3. Infrastructure & Third-Party Services

    To operate the service we rely on the following infrastructure providers:

    **Vercel** – Application hosting and delivery.  
    Vercel may process technical server logs such as:

    - IP address
    - Browser type
    - Request timestamps
    - User agent information

    These logs are used for security, stability, and performance monitoring.

    **Neon** – Database and backend infrastructure.  
    User accounts, schedules, and votes are stored in a managed PostgreSQL database provided by Neon.

    These providers process data only as required to deliver the service.

    ---

    ## 4. Data Retention & Deletion

    We store personal data only for as long as necessary to operate the service.

    You have full control over your account and data.

    If you delete your account through the **Settings** page:

    - Your account profile is permanently deleted.
    - All schedules created by you are removed.
    - All votes associated with your account are deleted.

    Due to our database architecture, these deletions occur automatically and cannot be reversed.

    This implements your **Right to Erasure (Art. 17 GDPR)**.

    ---

    ## 5. Cookies

    Our application only uses **essential session cookies** required for authentication.

    These cookies are necessary for the login process and cannot be disabled while using the service.

    We **do not use advertising cookies, tracking cookies, or analytics cookies**.

    ---

    ## 6. Your Rights

    If you are located in the European Union, you have the following rights under the **General Data Protection Regulation (GDPR)**:

    - Right of access to your stored data
    - Right to correction of inaccurate data
    - Right to deletion of your data
    - Right to restriction of processing
    - Right to data portability

    To exercise any of these rights, please contact us.

    ---

    ## 7. Changes to This Policy

    We may update this Privacy Policy from time to time to reflect legal or technical changes.

    Continued use of the service after such updates constitutes acceptance of the updated policy.

    ---

    ## 8. Contact

    If you have questions regarding this Privacy Policy or your personal data, you can contact us at:

    **matthiashermsen{'@'}gmail.com**

de:
  header:
    title: Datenschutzerklärung
    description: Wie wir deine personenbezogenen Daten erheben, verwenden und schützen.
  content: |
    ## 1. Überblick

    Diese Datenschutzerklärung erklärt, wie wir Informationen erheben, verwenden und schützen, wenn du unsere Terminplanungs-App nutzt.

    Unser Ziel ist es, nur die Daten zu erheben, die unbedingt notwendig sind, um den Service bereitzustellen.

    ---

    ## 2. Datenerhebung & OAuth

    Wir verwenden keine klassische Registrierung mit Passwort. Stattdessen erfolgt die Anmeldung über Drittanbieter (**Google** oder **GitHub**) mittels OAuth.

    Beim Login können wir folgende Informationen vom jeweiligen Anbieter erhalten:

    - Deinen Namen
    - Deine E-Mail-Adresse
    - Dein Profilbild (Avatar)
    - Eine eindeutige OAuth-Provider-ID

    Zusätzlich speichern wir Daten, die du innerhalb der Anwendung erstellst:

    - Schedule-Titel
    - Votes für Termine
    - grundlegende Account-Einstellungen

    **Rechtsgrundlage:**  
    Die Verarbeitung erfolgt gemäß **Art. 6 Abs. 1 lit. b DSGVO** (Erfüllung eines Vertrags), da diese Daten für den Betrieb des Services erforderlich sind.

    ---

    ## 3. Infrastruktur & Drittanbieter

    Für den Betrieb des Services nutzen wir folgende Infrastrukturanbieter:

    **Vercel** – Hosting der Webanwendung.  
    Vercel kann technische Server-Logs verarbeiten, darunter:

    - IP-Adresse
    - Browsertyp
    - Zeitstempel von Anfragen
    - User-Agent Informationen

    Diese Daten dienen der Sicherheit, Stabilität und Leistungsoptimierung des Systems.

    **Neon** – Datenbank- und Backend-Infrastruktur.  
    Benutzerkonten, Schedules und Votes werden in einer verwalteten PostgreSQL-Datenbank bei Neon gespeichert.

    Diese Anbieter verarbeiten Daten nur, soweit dies für den Betrieb des Services erforderlich ist.

    ---

    ## 4. Speicherdauer & Löschung

    Wir speichern personenbezogene Daten nur so lange, wie es für den Betrieb des Services notwendig ist.

    Du hast jederzeit die volle Kontrolle über deine Daten.

    Wenn du dein Konto über die **Settings**-Seite löschst:

    - wird dein Account-Profil dauerhaft gelöscht
    - werden alle von dir erstellten Schedules entfernt
    - werden alle mit deinem Account verbundenen Votes gelöscht

    Aufgrund unserer Datenbankstruktur erfolgt diese Löschung automatisch und ist nicht rückgängig zu machen.

    Damit wird dein **Recht auf Löschung (Art. 17 DSGVO)** umgesetzt.

    ---

    ## 5. Cookies

    Unsere Anwendung verwendet ausschließlich **notwendige Session-Cookies**, die für die Authentifizierung erforderlich sind.

    Diese Cookies sind technisch notwendig, damit der Login funktioniert.

    Wir verwenden **keine Tracking-, Analyse- oder Werbe-Cookies**.

    ---

    ## 6. Deine Rechte

    Nach der **Datenschutz-Grundverordnung (DSGVO)** hast du folgende Rechte:

    - Recht auf Auskunft über deine gespeicherten Daten
    - Recht auf Berichtigung falscher Daten
    - Recht auf Löschung deiner Daten
    - Recht auf Einschränkung der Verarbeitung
    - Recht auf Datenübertragbarkeit

    Wenn du eines dieser Rechte ausüben möchtest, kontaktiere uns bitte.

    ---

    ## 7. Änderungen dieser Datenschutzerklärung

    Wir können diese Datenschutzerklärung gelegentlich aktualisieren, um rechtliche oder technische Änderungen zu berücksichtigen.

    Wenn du den Service nach einer Aktualisierung weiterhin nutzt, gilt dies als Zustimmung zur neuen Version.

    ---

    ## 8. Kontakt

    Bei Fragen zur Verarbeitung deiner Daten kannst du uns unter folgender Adresse kontaktieren:

    **matthiashermsen{'@'}gmail.com**
tr:
  header:
    title: Gizlilik Politikası
    description: Kişisel verilerinizi nasıl topluyoruz, kullanıyoruz ve koruyoruz.
  content: |
    ## 1. Genel Bakış

    Bu Gizlilik Politikası, planlama uygulamamızı kullandığınızda bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.

    Amacımız, yalnızca hizmetin çalışması için gereken minimum miktarda veriyi toplamaktır.

    ---

    ## 2. Veri Toplama ve OAuth

    Geleneksel şifre tabanlı kayıt kullanmıyoruz. Bunun yerine, kimlik doğrulama için üçüncü taraf OAuth sağlayıcılarını (**Google** ve **GitHub**) kullanıyoruz.

    Giriş yaptığınızda, sağlayıcıdan aşağıdaki bilgileri alabiliriz:

    - Adınız
    - E-posta adresiniz
    - Profil resminiz (avatar)
    - Benzersiz bir OAuth sağlayıcı kimliği

    Buna ek olarak, uygulama içinde oluşturduğunuz verileri saklıyoruz:

    - Takvim başlıkları
    - Belirli tarihler için verilen oylar
    - Temel hesap tercihleri

    **Yasal dayanak:** Veri işleme, hizmetin sağlanması için gerekli olduğundan **GDPR Madde 6 (1) bent b** (sözleşmenin ifası) uyarınca gerçekleştirilir.

    ---

    ## 3. Altyapı ve Üçüncü Taraf Hizmetleri

    Hizmeti yürütmek için aşağıdaki altyapı sağlayıcılarına güveniyoruz:

    **Vercel** – Uygulama barındırma ve sunumu.  
    Vercel, aşağıdakiler gibi teknik sunucu günlüklerini işleyebilir:

    - IP adresi
    - Tarayıcı türü
    - İstek zaman damgaları
    - Kullanıcı aracı (user agent) bilgileri

    Bu günlükler güvenlik, kararlılık ve performans izleme için kullanılır.

    **Neon** – Veritabanı ve arka uç altyapısı.  
    Kullanıcı hesapları, takvimler ve oylar, Neon tarafından sağlanan yönetilen bir PostgreSQL veritabanında saklanır.

    Bu sağlayıcılar, verileri yalnızca hizmeti sunmak için gerekli olduğu ölçüde işler.

    ---

    ## 4. Veri Saklama ve Silme

    Kişisel verileri yalnızca hizmetin çalışması için gerekli olduğu sürece saklıyoruz.

    Hesabınız ve verileriniz üzerinde tam kontrole sahipsiniz.

    Hesabınızı **Ayarlar (Settings)** sayfası üzerinden sildiğinizde:

    - Hesap profiliniz kalıcı olarak silinir.
    - Tarafınızca oluşturulan tüm takvimler kaldırılır.
    - Hesabınızla ilişkili tüm oylar silinir.

    Veritabanı mimarimiz nedeniyle bu silme işlemleri otomatik olarak gerçekleşir ve geri alınamaz.

    Bu, **Unutulma Hakkınızı (GDPR Madde 17)** uygular.

    ---

    ## 5. Çerezler

    Uygulamamız yalnızca kimlik doğrulama için gerekli olan **temel oturum çerezlerini** kullanır.

    Bu çerezler giriş işlemi için gereklidir ve hizmeti kullanırken devre dışı bırakılamaz.

    **Reklam çerezleri, takip çerezleri veya analiz çerezleri kullanmıyoruz.**

    ---

    ## 6. Haklarınız

    Avrupa Birliği'nde bulunuyorsanız, **Genel Veri Koruma Yönetmeliği (GDPR)** kapsamında aşağıdaki haklara sahipsiniz:

    - Saklanan verilerinize erişim hakkı
    - Hatalı verilerin düzeltilmesi hakkı
    - Verilerinizin silinmesi hakkı
    - İşlemenin kısıtlanması hakkı
    - Veri taşınabilirliği hakkı

    Bu haklardan herhangi birini kullanmak için lütfen bizimle iletişime geçin.

    ---

    ## 7. Bu Politikadaki Değişiklikler

    Yasal veya teknik değişiklikleri yansıtmak amacıyla bu Gizlilik Politikasını zaman zaman güncelleyebiliriz.

    Bu tür güncellemelerden sonra hizmetin kullanılmaya devam edilmesi, güncellenmiş politikanın kabul edildiği anlamına gelir.

    ---

    ## 8. İletişim

    Bu Gizlilik Politikası veya kişisel verilerinizle ilgili sorularınız varsa, bizimle şu adresten iletişime geçebilirsiniz:

    **matthiashermsen{'@'}gmail.com**
</i18n>