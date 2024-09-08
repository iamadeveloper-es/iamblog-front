<template>
  <div v-html="parsedContent" class="content"></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { marked } from 'marked';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; 
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-css'; 
import 'prismjs/components/prism-markup';

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

marked.setOptions({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return prism.highlight(code, prism.languages.markup, 'markup');
    }
  },
  langPrefix: 'language-', // Añade la clase `language-` al HTML generado por marked
});

const parsedContent = computed(() => {
  return marked(props.content);
});

// Aplica el resaltado de sintaxis después de que el componente se haya montado
onMounted(() => {
  prism.highlightAll();
});

// Si el contenido puede cambiar dinámicamente, utiliza watch
watch(parsedContent, () => {
  prism.highlightAll();
});
</script>

<style lang="scss">
.content{
  margin-top: 2.5em;
  h1{
    font-size: 2em;
    margin-bottom: .7em;
  }
  h2, h3, h4, h5{
    margin-bottom: .3em;
  }
  h2{
    font-size: 1.75em;
  }
  h3{
    font-size: 1.60em;
  }
  h4{
    font-size: 1.30em;
  }

  pre{
    background: #2d2d2d; /* Fondo oscuro para bloques de código */
    padding: 1em;
    margin-top: 1.5em;
    border-radius: 5px;
    color: #ccc; /* Color del texto */
    overflow-x: auto; /* Permite el desplazamiento horizontal si el código es demasiado largo */
  }

  code{
    font-family: 'Fira Code', 'Fira Mono', Consolas, Menlo, 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
  }

  ul{
    list-style: disc;
  }

  ol{
    list-style: decimal;
  }

  ul, ol{
    margin-left: 15px;
    li{
      margin: .5em 0;
    }
  }
}
</style>
