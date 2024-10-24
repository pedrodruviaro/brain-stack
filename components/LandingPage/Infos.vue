<script setup lang="ts"></script>

<template>
  <BaseContainer as="section" class="py-10">
    <BaseTitle size="lg" label="Como funciona" decoration class="mb-6" />
    <Accordion value="0">
      <AccordionPanel value="0">
        <AccordionHeader>Entre e crie suas ideias</AccordionHeader>
        <AccordionContent>
          <p>
            É simples e rápido. Após se conectar com sua conta do GitHub, você
            estará pronto para começar a criar. Não precisa de configurações
            adicionais, basta abrir o editor, soltar a criatividade e colocar
            suas ideias no papel. O processo é intuitivo, feito para que você
            possa se concentrar apenas no conteúdo, sem distrações.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader>Defina as especificações da ideia</AccordionHeader>
        <AccordionContent>
          <p>
            Descreva a ideia com o máximo de detalhes, incluindo o objetivo
            principal, tecnologias sugeridas e possíveis implementações. Não
            sabe como começar? Não tem problema! Use nosso template padrão para
            guiar sua descrição. Assim, você garante que sua ideia fique clara e
            compreensível para todos que a acessarem.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="2">
        <AccordionHeader>Compartilhe com a comunidade</AccordionHeader>
        <AccordionContent>
          <p>
            Depois de criar sua ideia, é hora de compartilhá-la com o mundo.
            Todas as ideias são públicas, e ao compartilhá-las, você ajuda
            outras pessoas que estão buscando inspiração ou tentando definir
            novos projetos. Sua ideia pode ser o ponto de partida para algo
            grande, então comece agora a propor novas possibilidades dentro do
            seu nicho!
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>

    <Button
      label="Entre e conheça"
      as="router-link"
      to="/auth/login"
      icon="pi pi-sign-in"
      icon-pos="right"
      class="mt-10"
    />
  </BaseContainer>
</template>
