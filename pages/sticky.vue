<template>
  <div>
    <b-container>
        <div class="mb-2">
          <b-form-checkbox v-model="stickyHeader" inline>Sticky header</b-form-checkbox>
          <b-form-checkbox v-model="noCollapse" inline>No border collapse</b-form-checkbox>
        </div>
        <b-table
          :sticky-header="stickyHeader"
          :no-border-collapse="noCollapse"
          responsive
          :items="items"
          :fields="fields"
        >
          <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
          <template v-slot:head(id)="scope">
            <div class="text-nowrap">Row ID</div>
          </template>
          <template v-slot:head()="scope">
            <div class="text-nowrap">
              Heading {{ scope.label }}
            </div>
          </template>
        </b-table>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stickyHeader: true,
        noCollapse: false,
        fields: [
          { key: 'id', stickyColumn: true, isRowHeader: true, variant: 'primary' },
          { key: 'a', stickyColumn: true, variant: 'info' },
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l'
        ],
        items: [
          { id: 1, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 2, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 3, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 4, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 5, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 6, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 7, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 8, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 9, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 },
          { id: 10, a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11 }
        ]
      }
    }
  }
</script>