"use client"

import { useRef } from "react"
import { Network, Globe, Activity, MapPin, Filter, SortDesc, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { WorldMapDemo } from "@/components/world-map-demo"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { motion, useScroll, useTransform } from "framer-motion"
import { FollowerPointerCard } from "@/components/ui/following-pointer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#020b1f] via-[#041554] to-[#020b1f]">
      <ScrollProgress color="#3b82f6" height={4} />

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale, y }}
        className="relative pt-24 pb-16 px-4 md:px-8 min-h-[90vh] flex items-center"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Decentralized Access with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Erebrus DVPN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Unrestricted Uncensored Web Access
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <FollowerPointerCard title="Run Your Own Node">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Run Your Node
              </Button>
            </FollowerPointerCard>

            <FollowerPointerCard title="View Active Nodes">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <MapPin className="mr-2 h-4 w-4" />
                Active Node Map
              </Button>
            </FollowerPointerCard>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Network className="h-6 w-6 text-blue-400" />, title: "NO. OF NODES", value: "14" },
            { icon: <Globe className="h-6 w-6 text-blue-400" />, title: "NO. OF REGIONS", value: "6" },
            { icon: <Activity className="h-6 w-6 text-blue-400" />, title: "ACTIVE NODES", value: "12" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              <div className="bg-blue-500/20 p-3 rounded-full mr-4 relative z-10">{stat.icon}</div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 uppercase">{stat.title}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Erebrus Decentralized VPN (DVPN) Network Nodes Overview
            </h2>
            <p className="text-gray-300">
              Explore the Erebrus decentralized VPN network with our interactive map. View detailed information on
              active nodes, including their location, network performance, and status. This map provides real-time
              insights into the global distribution and operation of our secure and private VPN infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#041554]/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <WorldMapDemo />
          </motion.div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full md:w-64">
              <Input
                placeholder="Search nodes..."
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute w-4 h-4 text-gray-400 top-3 left-3"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10">
                    <SortDesc className="w-4 h-4 mr-2" />
                    Sort
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                  <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                  <DropdownMenuItem>Region</DropdownMenuItem>
                  <DropdownMenuItem>Status</DropdownMenuItem>
                  <DropdownMenuItem>Uptime (Highest)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-white/10 hover:bg-white/5">
                    <TableHead className="text-gray-300 font-medium">NODE NAME</TableHead>
                    <TableHead className="text-gray-300 font-medium">CHAIN</TableHead>
                    <TableHead className="text-gray-300 font-medium">WALLET ADDRESS</TableHead>
                    <TableHead className="text-gray-300 font-medium">REGION</TableHead>
                    <TableHead className="text-gray-300 font-medium">NETWORK SPEED</TableHead>
                    <TableHead className="text-gray-300 font-medium">STATUS</TableHead>
                    <TableHead className="text-gray-300 font-medium">UPTIME</TableHead>
                    <TableHead className="text-gray-300 font-medium">LAST PING</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nodes.map((node) => (
                    <TableRow key={node.id} className="border-b border-white/10 hover:bg-white/5">
                      <TableCell className="font-medium text-white">{node.name}</TableCell>
                      <TableCell className="text-gray-300">{node.chain}</TableCell>
                      <TableCell className="font-mono text-xs text-gray-300">{node.wallet}</TableCell>
                      <TableCell className="text-gray-300">{node.region}</TableCell>
                      <TableCell>
                        <div className="text-xs text-gray-300">
                          <div>DL: {node.downloadSpeed}</div>
                          <div>UL: {node.uploadSpeed}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={node.status === "active" ? "success" : "destructive"}>{node.status}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-300">{node.uptime}</TableCell>
                      <TableCell className="text-gray-300">{node.lastPing}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Mock data based on the screenshot
const nodes = [
  {
    id: 1,
    name: "ECLIPSE-DEV",
    chain: "eclipse",
    wallet: "ERk...V3t",
    region: "IN",
    downloadSpeed: "31.0328616644823",
    uploadSpeed: "28.5139682406685",
    status: "active",
    uptime: "47 d, 0 h, 20 m, 35 s",
    lastPing: "47 d, 0 h, 20 m, 1 s",
  },
  {
    id: 2,
    name: "rising_usurper",
    chain: "risetestnet",
    wallet: "0xa...D63",
    region: "US",
    downloadSpeed: "667.35675592972",
    uploadSpeed: "9.6689718174807",
    status: "active",
    uptime: "1 h, 43 m, 40 s",
    lastPing: "2 s",
  },
  {
    id: 3,
    name: "SuchNode-test-1",
    chain: "APTOS",
    wallet: "...",
    region: "SE",
    downloadSpeed: "986.9028",
    uploadSpeed: "856.9659",
    status: "active",
    uptime: "84 d, 19 h, 4 m, 38 s",
    lastPing: "2 s",
  },
  {
    id: 4,
    name: "ECLIPSE-DEV",
    chain: "eclipse",
    wallet: "ERk...V3t",
    region: "IN",
    downloadSpeed: "0",
    uploadSpeed: "0.1359069791872",
    status: "active",
    uptime: "47 d, 4 h, 43 m, 30 s",
    lastPing: "47 d, 4 h, 42 m, 54 s",
  },
  {
    id: 5,
    name: "universal_roar",
    chain: "solana",
    wallet: "8Tp...jHi",
    region: "SG",
    downloadSpeed: "3956.3063732943",
    uploadSpeed: "1182.0686534310",
    status: "active",
    uptime: "1 d, 13 h, 22 m, 11 s",
    lastPing: "2 s",
  },
  {
    id: 6,
    name: "shadow_serpent",
    chain: "peaq",
    wallet: "0x1...f0C",
    region: "DE",
    downloadSpeed: "550.25045756783",
    uploadSpeed: "366.83527334278",
    status: "inactive",
    uptime: "---",
    lastPing: "8 d, 4 h, 22 m, 13 s",
  },
]
