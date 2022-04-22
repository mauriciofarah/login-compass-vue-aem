<template>
  <div :class="className">
    <div
      v-if="richText"
      :id="modelId"
      data-rte-editelement
      v-html="getRichTextContent()"
    ></div>
    <div v-else :id="modelId" data-rte-editelement v-html="text"></div>
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
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  color: #e0e0e0;
  padding-top: 18.24%;

  width: 118px;
}

.subtitle-text {
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #e0e0e0;

  width: 301px;
}

.login {
  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #e0e0e0;
  padding-top: 18.24%;
  margin-bottom: 5%;

  width: 81px;
}
</style>
