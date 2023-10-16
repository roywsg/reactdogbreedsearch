import {Constants} from "@/common/constants.ts";
import {Dog} from "@/lib/types.ts";
import {type ClassValue, clsx} from "clsx"
import {parseInt} from "lodash";
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortBy(a: Dog, b: Dog, sortBy: string, order: string = 'asc') {
  if (sortBy === Constants.sortBy.name) {
    if (a[sortBy as keyof Dog] < b[sortBy as keyof Dog]) return order === 'asc' ? -1 : 1

    if (a[sortBy as keyof Dog] > b[sortBy as keyof Dog]) return order === 'asc' ? 1 : -1
  }

  if (sortBy === Constants.sortBy.lifespan) {
    const alife = a.life_span.split(' ')[0]
    const blife = b.life_span.split(' ')[0]

    if (parseInt(alife) < parseInt(blife)) return order === 'asc' ? -1 : 1

    if (parseInt(alife) > parseInt(blife)) return order === 'asc' ? 1 : -1
  }

  if (sortBy === Constants.sortBy.height) {
    const aheight = a.height.metric.split(' ')[0]
    const bheight = b.height.metric.split(' ')[0]

    if (aheight < bheight) return order === 'asc' ? -1 : 1

    if (aheight > bheight) return order === 'asc' ? 1 : -1
  }

  return 0
}