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
.normal-title {
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  text-align: right;
  color: #C12D18;
}

.bold-title {
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: 64px;
  line-height: 81px;
  text-align: right;
  color: #C12D18;
}

.subtitle {
  font-family: 'Mark Pro';
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
}
</style>
