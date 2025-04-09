"use client"

import { useState } from "react"
import WorldMap from "@/components/ui/world-map"
import { motion } from "framer-motion"
import { InteractiveNodeCard } from "@/components/interactive-node-card"

// Sample nodes data
const nodeData = [
  {
    id: 1,
    name: "ECLIPSE-DEV",
    chain: "eclipse",
    region: "IN",
    location: { lat: 20.5937, lng: 78.9629 },
    downloadSpeed: "31.03",
    uploadSpeed: "28.51",
    status: "active",
    uptime: "47 d, 0 h, 20 m, 35 s",
  },
  {
    id: 2,
    name: "rising_usurper",
    chain: "risetestnet",
    region: "US",
    location: { lat: 37.7749, lng: -122.4194 },
    downloadSpeed: "667.35",
    uploadSpeed: "9.66",
    status: "active",
    uptime: "1 h, 43 m, 40 s",
  },
  {
    id: 3,
    name: "SuchNode-test-1",
    chain: "APTOS",
    region: "SE",
    location: { lat: 60.1282, lng: 18.6435 },
    downloadSpeed: "986.90",
    uploadSpeed: "856.96",
    status: "active",
    uptime: "84 d, 19 h, 4 m, 38 s",
  },
  {
    id: 5,
    name: "universal_roar",
    chain: "solana",
    region: "SG",
    location: { lat: 1.3521, lng: 103.8198 },
    downloadSpeed: "3956.30",
    uploadSpeed: "1182.06",
    status: "active",
    uptime: "1 d, 13 h, 22 m, 11 s",
  },
  {
    id: 10,
    name: "solis",
    chain: "solana",
    region: "FI",
    location: { lat: 61.9241, lng: 25.7482 },
    downloadSpeed: "4341.19",
    uploadSpeed: "756.85",
    status: "active",
    uptime: "1 d, 13 h, 47 m, 29 s",
  },
  {
    id: 11,
    name: "american_eagle",
    chain: "solana",
    region: "US",
    location: { lat: 40.7128, lng: -74.006 },
    downloadSpeed: "4929.73",
    uploadSpeed: "972.49",
    status: "active",
    uptime: "1 d, 13 h, 42 m, 8 s",
  },
  {
    id: 12,
    name: "shadow_serpent",
    chain: "peaq",
    region: "DE",
    location: { lat: 51.1657, lng: 10.4515 },
    downloadSpeed: "550.25",
    uploadSpeed: "366.83",
    status: "inactive",
    uptime: "---",
  },
]

export function WorldMapDemo() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null)

  // Create connections between nodes
  const connections = nodeData.map((node, index) => {
    const nextNode = nodeData[(index + 1) % nodeData.length]
    return {
      start: node.location,
      end: nextNode.location,
    }
  })

  return (
    <div className="py-8 w-full">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <p className="font-bold text-xl md:text-2xl text-white">
          Global{" "}
          <span className="text-blue-400">
            {"Network".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto py-4">
          Our decentralized VPN network spans across multiple regions, providing secure and private connections
          worldwide. Click on any node to view detailed information.
        </p>
      </div>

      <div className="relative">
        <WorldMap
          dots={connections}
          lineColor="#3b82f6"
          onNodeClick={(lat, lng) => {
            // Find the node closest to the clicked coordinates
            const node = nodeData.find((n) => Math.abs(n.location.lat - lat) < 5 && Math.abs(n.location.lng - lng) < 5)
            if (node) {
              setSelectedNode(node.id === selectedNode ? null : node.id)
            }
          }}
          nodes={nodeData.map((node) => ({
            lat: node.location.lat,
            lng: node.location.lng,
            id: node.id,
            status: node.status,
          }))}
        />

        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-10 right-10 w-80 z-20"
          >
            <InteractiveNodeCard node={nodeData.find((n) => n.id === selectedNode)!} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
