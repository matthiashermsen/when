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
    title: Terms of Service
    description: The rules and guidelines for using our scheduling application.
  content: |
    ## 1. Acceptance of Terms

    By accessing or using our application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.

    ---

    ## 2. User Accounts

    To use certain features, you must sign in via a third-party OAuth provider (Google or GitHub).

    - You are responsible for maintaining the security of your account.
    - We are not responsible for any loss or damage resulting from your failure to comply with this security obligation.
    - You must notify us immediately if you suspect any unauthorized use of your account.

    ---

    ## 3. User-Generated Content

    You are solely responsible for the content you post, including **Schedule Titles** and **Votes**.

    > ⚠️ **Content Restrictions**  
    > You may not use the service to create content that is illegal, offensive, harassing, or violates the intellectual property rights of others.

    We reserve the right, but have no obligation, to remove content that we determine in our sole discretion to be unlawful or in violation of these Terms.

    ---

    ## 4. Termination & Deletion

    You may terminate your account at any time via the **Settings** page.

    > Upon deletion, all your data (Schedules, Votes, and Account information) will be permanently and irrecoverably removed from our database.

    We reserve the right to suspend or terminate your access to the service at any time, without notice, for conduct that we believe violates these Terms.

    ---

    ## 5. Limitation of Liability

    The service is provided on an **"AS IS"** and **"AS AVAILABLE"** basis. We make no warranties that:

    - The service will be uninterrupted, timely, secure, or error-free.
    - The results obtained from the use of the service will be accurate or reliable.

    In no event shall we be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the service.

    ---

    ## 6. Changes to Terms

    We reserve the right to update and change the Terms of Service from time to time without notice. Continued use of the service after any such changes shall constitute your consent to such changes.

    ---

    ## 7. Contact

    If you have any questions about these Terms, please contact us at:

    **matthiashermsen{'@'}gmail.com**
de:
  header:
    title: Nutzungsbedingungen
    description: Die Regeln und Richtlinien für die Nutzung unserer Terminplanungs-App.
  content: |
    ## 1. Zustimmung zu den Bedingungen

    Durch den Zugriff auf oder die Nutzung unserer Anwendung erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du diesen Bedingungen nicht zustimmst, nutze den Service bitte nicht.

    ---

    ## 2. Benutzerkonten

    Um bestimmte Funktionen zu nutzen, musst du dich über einen Drittanbieter-OAuth-Dienst (Google oder GitHub) anmelden.

    - Du bist verantwortlich für die Sicherheit deines Kontos.
    - Wir übernehmen keine Verantwortung für Verluste oder Schäden, die aus der Nichteinhaltung dieser Sicherheitsverpflichtung entstehen.
    - Du musst uns sofort informieren, wenn du eine unbefugte Nutzung deines Kontos vermutest.

    ---

    ## 3. Von Nutzern erstellte Inhalte

    Du bist allein verantwortlich für die Inhalte, die du veröffentlichst, einschließlich **Schedule-Titel** und **Votes**.

    > ⚠️ **Inhaltsbeschränkungen**  
    > Du darfst den Service nicht verwenden, um Inhalte zu erstellen, die illegal, beleidigend, belästigend sind oder die geistigen Eigentumsrechte anderer verletzen.

    Wir behalten uns das Recht vor, Inhalte zu entfernen, die wir nach eigenem Ermessen als rechtswidrig oder als Verstoß gegen diese Bedingungen ansehen. Dazu sind wir jedoch nicht verpflichtet.

    ---

    ## 4. Kündigung & Löschung

    Du kannst dein Konto jederzeit über die **Settings**-Seite löschen.

    > Nach der Löschung werden alle deine Daten (Schedules, Votes und Kontoinformationen) dauerhaft und unwiederbringlich aus unserer Datenbank entfernt.

    Wir behalten uns das Recht vor, deinen Zugang zum Service jederzeit und ohne Vorankündigung zu sperren oder zu beenden, wenn wir der Ansicht sind, dass dein Verhalten gegen diese Bedingungen verstößt.

    ---

    ## 5. Haftungsbeschränkung

    Der Service wird auf einer **"WIE BESEHEN"** und **"WIE VERFÜGBAR"** Basis bereitgestellt. Wir übernehmen keine Garantie dafür, dass:

    - der Service ununterbrochen, rechtzeitig, sicher oder fehlerfrei verfügbar ist.
    - die Ergebnisse aus der Nutzung des Services korrekt oder zuverlässig sind.

    In keinem Fall haften wir für direkte, indirekte, zufällige oder Folgeschäden, die aus der Nutzung oder der Unfähigkeit zur Nutzung des Services entstehen.

    ---

    ## 6. Änderungen der Bedingungen

    Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit und ohne Vorankündigung zu ändern oder zu aktualisieren. Die fortgesetzte Nutzung des Services nach solchen Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.

    ---

    ## 7. Kontakt

    Wenn du Fragen zu diesen Bedingungen hast, kontaktiere uns bitte unter:

    **matthiashermsen{'@'}gmail.com**
tr:
  header:
    title: Kullanım Şartları
    description: Planlama uygulamamızı kullanmaya ilişkin kurallar ve yönergeler.
  content: |
    ## 1. Şartların Kabulü

    Uygulamamıza erişerek veya kullanarak bu Kullanım Şartlarını kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız lütfen hizmeti kullanmayın.

    ---

    ## 2. Kullanıcı Hesapları

    Belirli özellikleri kullanabilmek için üçüncü taraf bir OAuth sağlayıcısı (Google veya GitHub) üzerinden giriş yapmanız gerekir.

    - Hesabınızın güvenliğini sağlamak sizin sorumluluğunuzdadır.
    - Bu güvenlik yükümlülüğünü yerine getirmemenizden doğabilecek herhangi bir kayıp veya zarardan sorumlu değiliz.
    - Hesabınızın yetkisiz kullanıldığını düşünüyorsanız derhal bize bildirmelisiniz.

    ---

    ## 3. Kullanıcı Tarafından Oluşturulan İçerik

    Yayınladığınız içeriklerden tamamen siz sorumlusunuz; buna **Schedule Başlıkları** ve **Oylar** dahildir.

    > ⚠️ **İçerik Kısıtlamaları**  
    > Hizmeti yasa dışı, saldırgan, taciz edici veya başkalarının fikri mülkiyet haklarını ihlal eden içerikler oluşturmak için kullanamazsınız.

    Tamamen kendi takdirimize bağlı olarak yasa dışı olduğunu veya bu şartları ihlal ettiğini düşündüğümüz içerikleri kaldırma hakkımız saklıdır; ancak bunu yapmak zorunda değiliz.

    ---

    ## 4. Hesap Sonlandırma ve Silme

    Hesabınızı **Settings** sayfası üzerinden istediğiniz zaman silebilirsiniz.

    > Hesabınız silindiğinde tüm verileriniz (Schedules, Votes ve hesap bilgileri) veritabanımızdan kalıcı ve geri alınamaz şekilde silinir.

    Bu şartları ihlal ettiğini düşündüğümüz davranışlar için, önceden bildirimde bulunmaksızın hizmete erişiminizi askıya alma veya sonlandırma hakkımız saklıdır.

    ---

    ## 5. Sorumluluğun Sınırlandırılması

    Hizmet **"OLDUĞU GİBİ"** ve **"MEVCUT OLDUĞU ŞEKİLDE"** sunulmaktadır. Aşağıdakiler konusunda herhangi bir garanti vermiyoruz:

    - Hizmetin kesintisiz, zamanında, güvenli veya hatasız olacağı
    - Hizmet kullanımından elde edilen sonuçların doğru veya güvenilir olacağı

    Hizmetin kullanımından veya kullanılamamasından kaynaklanan doğrudan, dolaylı veya sonuç olarak ortaya çıkan zararlardan hiçbir şekilde sorumlu tutulamayız.

    ---

    ## 6. Şartlarda Değişiklik

    Kullanım Şartlarını zaman zaman ve önceden bildirimde bulunmaksızın güncelleme veya değiştirme hakkımız saklıdır. Bu değişikliklerden sonra hizmeti kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.

    ---

    ## 7. İletişim

    Bu şartlarla ilgili herhangi bir sorunuz varsa bizimle şu adresten iletişime geçebilirsiniz:

    **matthiashermsen{'@'}gmail.com**
</i18n>