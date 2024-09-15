'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GameLobby() {
  const [lobbyName, setLobbyName] = useState('')
  const [lobbyCode, setLobbyCode] = useState('')

  const handleCreateLobby = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Creating lobby:', lobbyName)
    // Here you would typically make an API call to create the lobby
  }

  const handleJoinLobby = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Joining lobby:', lobbyCode)
    // Here you would typically make an API call to join the lobby
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Card className="w-[350px] bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-white">Game Lobby</CardTitle>
          <CardDescription className="text-gray-400">Create or join a game lobby</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="create" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700">
              <TabsTrigger value="create" className="data-[state=active]:bg-gray-600">Create Lobby</TabsTrigger>
              <TabsTrigger value="join" className="data-[state=active]:bg-gray-600">Join Lobby</TabsTrigger>
            </TabsList>
            <TabsContent value="create">
              <form onSubmit={handleCreateLobby} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lobbyName" className="text-white">Lobby Name</Label>
                  <Input
                    id="lobbyName"
                    placeholder="Enter lobby name"
                    value={lobbyName}
                    onChange={(e) => setLobbyName(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Create Lobby</Button>
              </form>
            </TabsContent>
            <TabsContent value="join">
              <form onSubmit={handleJoinLobby} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lobbyCode" className="text-white">Lobby Code</Label>
                  <Input
                    id="lobbyCode"
                    placeholder="Enter lobby code"
                    value={lobbyCode}
                    onChange={(e) => setLobbyCode(e.target.value)}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Join Lobby</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="text-sm text-gray-400">
          Join your friends and start playing!
        </CardFooter>
      </Card>
    </div>
  )
}