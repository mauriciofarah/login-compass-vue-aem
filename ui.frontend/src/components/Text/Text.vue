<template>
  <div :class="className">
    <div
      v-if="richText"
      :id="modelId"
      data-rte-editelement
      v-html="getRichTextContent()"
    ></div>
    <div v-else
         :id="modelId"
         data-rte-editelement
         v-html="text">
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify'
import extractModelId from '../../utils/extract-model-id'

export default {
  name: 'Text',
  props: {
    cqPath: {
      type: String
    },
    richText: {
      type: Boolean
    },
    text: {
      type: String
    },
    className: {
      type: String
    }
  },
  computed: {
    modelId () {
      return extractModelId(this.cqPath)
    }
  },
  methods: {
    getRichTextContent () {
      return DOMPurify.sanitize(this.text)
    }
  }
}

</script>

<style scoped lang="scss">
.title-text {
  font-family: 'Space Mono';
  max-width: 90%;
  weight: 700;
  margin-left: 10vw;
}

.subtitle-text {
  font-family: 'Space Mono';
  max-width: 70%;
  weight: 400;
  margin-left: 10vw;
  margin-bottom: 10%;
}

.not-found {
  font-family: 'Inconsolata';
  margin-bottom: 5%;
}

.footer {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: auto;
  min-width: 100%;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #BDBDBD;
}
</style>
