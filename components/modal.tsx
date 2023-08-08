'use client'

import { X } from 'lucide-react'
import Link from 'next/link'

import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog'

interface ModalProps {
  open: boolean
  closeHref: string
  children: React.ReactNode
}

export default function Modal({ open, closeHref, children }: ModalProps) {
  return (
    <Dialog open={open}>
      <DialogContent>
        {children}
        <DialogClose asChild>
          <Link href={closeHref} scroll={false}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Link>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
