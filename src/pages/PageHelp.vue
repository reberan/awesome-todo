<template>
  <q-page padding>
    <q-btn
      color="primary"
      :label="$t('back')"
      to="/settings"
      icon="chevron_left"
      flat
    />
    <q-list bordered padding class="q-mt-sm">
      <q-item-label header>{{ $t("help") }}</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            urna suscipit, iaculis augue ac, venenatis erat. Nunc varius nisl
            eros, ac aliquet dolor imperdiet gravida. Nunc dictum rhoncus
            commodo. Sed faucibus faucibus lobortis. Fusce dictum nec odio vitae
            imperdiet. Nullam varius vehicula nisi vel semper. Mauris urna urna,
            suscipit eu efficitur ac, tristique eu sem. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Sed a dolor sapien.
            Vestibulum aliquam, libero sit amet auctor tincidunt, massa neque
            faucibus nisl, id molestie lorem ligula at mauris. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Sed eget ultrices elit. Sed dignissim magna et
            convallis tincidunt. Nunc lacinia lectus vitae mauris iaculis
            dignissim.
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
