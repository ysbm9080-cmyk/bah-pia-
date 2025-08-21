player.onChat("start", function () {
        // Dá os papéis ao jogador
            mobs.give(mobs.target(LOCAL_PLAYER), PAPER, 1)
                mobs.give(mobs.target(LOCAL_PLAYER), PAPER, 1)
                    
                        // Renomeia os papéis
                            player.say("Você recebeu dois papéis mágicos!")
                                blocks.setItemName(PAPER, "Esfera Coral")
                                    blocks.setItemName(PAPER, "Torre Rosa")
                                    })

                                    // Detecta uso do papel "Esfera Coral"
                                    player.onItemInteracted(PAPER, function () {
                                        if (blocks.getItemName(PAPER) == "Esfera Coral") {
                                                player.say("Invocando esfera coral...")
                                                        shapes.sphere(
                                                                    blocks.block(BlockType.OrangeConcrete),
                                                                                pos(3, 0, 3),
                                                                                            4,
                                                                                                        ShapeOperation.Replace
                                                                                                                )
                                                                                                                        mobs.removeItem(mobs.target(LOCAL_PLAYER), PAPER, 1)
                                                                                                                            }
                                                                                                                            })

                                                                                                                            // Detecta uso do papel "Torre Rosa"
                                                                                                                            player.onItemInteracted(PAPER, function () {
                                                                                                                                if (blocks.getItemName(PAPER) == "Torre Rosa") {
                                                                                                                                        player.say("Construindo torre rosa...")
                                                                                                                                                shapes.line(
                                                                                                                                                            blocks.block(BlockType.PinkConcrete),
                                                                                                                                                                        pos(0, 0, 0),
                                                                                                                                                                                    pos(0, 10, 0),
                                                                                                                                                                                                ShapeOperation.Replace
                                                                                                                                                                                                        )
                                                                                                                                                                                                                mobs.removeItem(mobs.target(LOCAL_PLAYER), PAPER, 1)
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    })
                                                                                                                                                                                                                    
})
