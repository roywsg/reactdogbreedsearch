import {Dog} from "@/lib/types.ts";
import {expect, test} from "vitest";
import {sortBy} from "@/lib/utils.ts";
import lodash from "lodash";

test('test sortBy', () => {
  const dogs = [
    {
      name: "Cardigan Welsh Corgi", height: {
        metric: "27 - 32"
      },
      life_span: "12 - 14 years"
    },
    {
      name: "Pembroke Welsh Corgi",
      height: {
        metric: "25 - 30"
      },
      life_span: "12 - 14 years"
    }
  ]

  const sortByName = lodash.cloneDeep(dogs)
  sortByName.sort((a: Dog, b: Dog) => sortBy(a, b, "name", 'asc'))

  const sortByHeight = lodash.cloneDeep(dogs)
  sortByHeight.sort((a: Dog, b: Dog) => sortBy(a, b, "height", 'asc'))

  const sortByLifespan = lodash.cloneDeep(dogs)
  sortByLifespan.sort((a: Dog, b: Dog) => sortBy(a, b, "lifespan", 'asc'))

  expect(sortByName[0].name).toBe("Cardigan Welsh Corgi")
  expect(sortByHeight[0].name).toBe("Pembroke Welsh Corgi")
  expect(sortByLifespan[0].name).toBe("Cardigan Welsh Corgi")
})