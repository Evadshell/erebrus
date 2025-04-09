"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FollowerPointerCard } from "@/components/ui/following-pointer"

interface NodeCardProps {
  node: {
    id: number
    name: string
    chain: string
    region: string
    downloadSpeed: string
    uploadSpeed: string
    status: string
    uptime: string
  }
}

export function InteractiveNodeCard({ node }: NodeCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <FollowerPointerCard title={`${node.name} - ${node.region}`}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-white"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{node.name}</h3>
            <Badge variant={node.status === "active" ? "success" : "destructive"}>{node.status}</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-blue-300">CHAIN</p>
              <p className="font-medium">{node.chain}</p>
            </div>
            <div>
              <p className="text-xs text-blue-300">REGION</p>
              <p className="font-medium">{node.region}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-xs text-blue-300">NETWORK SPEED</p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="flex items-center">
                <span className="text-xs mr-2">↓</span>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: isHovered ? `${Math.min(Number.parseFloat(node.downloadSpeed) / 50, 100)}%` : "0%",
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs mr-2">↑</span>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: isHovered ? `${Math.min(Number.parseFloat(node.uploadSpeed) / 50, 100)}%` : "0%",
                    }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-1 text-xs">
              <span>DL: {Number.parseFloat(node.downloadSpeed).toFixed(2)} Mbps</span>
              <span>UL: {Number.parseFloat(node.uploadSpeed).toFixed(2)} Mbps</span>
            </div>
          </div>

          <div>
            <p className="text-xs text-blue-300">UPTIME</p>
            <p className="font-medium">{node.uptime}</p>
          </div>
        </div>
      </motion.div>
    </FollowerPointerCard>
  )
}
