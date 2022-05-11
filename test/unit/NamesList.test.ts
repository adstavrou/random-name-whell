import { mount } from '@vue/test-utils'
import NameList from '../../src/components/namesList/NamesList.vue'
import { it, describe, expect, test } from 'vitest';


test('mount component', async () => {
    expect(NameList).toBeTruthy();

})