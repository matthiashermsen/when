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
    title: Imprint
    description: Legal disclosure and contact information.
  content: |
    ## Information according to § 5 TMG

    **Matthias Hermsen**

    Fortweg 10  
    35463 Fernwald  
    Germany

    ## Contact
    Email: matthiashermsen{'@'}gmail.com

    ## Dispute Resolution
    The European Commission provides a platform for online dispute resolution (ODR): [https://ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr).  
    We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
de:
  header:
    title: Impressum
    description: Rechtliche Informationen und Kontakt.
  content: |
    ## Angaben gemäß § 5 TMG

    **Matthias Hermsen**

    Fortweg 10  
    35463 Fernwald 

    ## Kontakt
    E-Mail: matthiashermsen{'@'}gmail.com

    ## EU-Streitschlichtung
    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [https://ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr).  
    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
tr:
  header:
    title: Künye
    description: Yasal bilgiler ve iletişim.
  content: |
    ## Alman Telemedya Yasası (TMG) § 5 uyarınca bilgiler

    **Matthias Hermsen**
    
    Fortweg 10  
    35463 Fernwald
    Almanya

    ## İletişim
    E-posta: matthiashermsen{'@'}gmail.com

    ## AB Uyuşmazlık Çözümü
    Avrupa Komisyonu, çevrimiçi uyuşmazlık çözümü (ODR) için bir platform sağlamaktadır: [https://ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr).  
    Bir tüketici hakem heyeti önündeki uyuşmazlık çözüm prosedürlerine katılmaya istekli veya yükümlü değiliz.
</i18n>