import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Classname
 * 
 * @param {ClassValue[]} inputs
 * @returns {string}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency
 * 
 * @param {number} price
 * @returns {string}
 */
export function formatCurrency(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

/**
 * Format pagination
 * 
 * @param {number} total
 * @param {number} take
 * @returns {number}
 */
export function formatPagination(total: number, take: number) {
  return Math.ceil(total / take)
}