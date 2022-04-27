export interface EventIdentity {
    name: EventName
    parent: EventParent
}

/* Opcional xd */
export enum EventName {
    ClientReady = 'ready',
    GuildCreate = 'guildCreate',
    GuildDelete = 'guildDelete',
    GuildUpdate = 'guildUpdate',
    GuildUnavailable = 'guildUnavailable',
    GuildMemberAdd = 'guildMemberAdd',
    GuildMemberRemove = 'guildMemberRemove',
    GuildMemberUpdate = 'guildMemberUpdate',
    GuildMemberAvailable = 'guildMemberAvailable',
    GuildMembersChunk = 'guildMembersChunk',
    GuildIntegrationsUpdate = 'guildIntegrationsUpdate',
    GuildRoleCreate = 'roleCreate',
    GuildRoleDelete = 'roleDelete',
    InviteCreate = 'inviteCreate',
    InviteDelete = 'inviteDelete',
    GuildRoleUpdate = 'roleUpdate',
    GuildEmojiCreate = 'emojiCreate',
    GuildEmojiDelete = 'emojiDelete',
    GuildEmojiUpdate = 'emojiUpdate',
    GuildBanAdd = 'guildBanAdd',
    GuildBanRemove = 'guildBanRemove',
    ChannelCreate = 'channelCreate',
    ChannelDelete = 'channelDelete',
    ChannelUpdate = 'channelUpdate',
    ChannelPinsUpdate = 'channelPinsUpdate',
    MessageCreate = 'messageCreate',
    MessageDelete = 'messageDelete',
    MessageUpdate = 'messageUpdate',
    MessageBulkDelete = 'messageDeleteBulk',
    MessageReactionAdd = 'messageReactionAdd',
    MessageReactionRemove = 'messageReactionRemove',
    MessageReactionRemoveAll = 'messageReactionRemoveAll',
    MessageReactionRemoveEmoji = 'messageReactionRemoveEmoji',
    ThreadCreate = 'threadCreate',
    ThreadDelete = 'threadDelete',
    ThreadUpdate = 'threadUpdate',
    ThreadListSync = 'threadListSync',
    ThreadMemberUpdate = 'threadMemberUpdate',
    ThreadMembersUpdate = 'threadMembersUpdate',
    UserUpdate = 'userUpdate',
    PresenceUpdate = 'presenceUpdate',
    VoiceStateUpdate = 'voiceStateUpdate',
    TypingStart = 'typingStart',
    WebhooksUpdate = 'webhookUpdate',
    InteractionCreate = 'interactionCreate',
    Error = 'error',
    Warn = 'warn',
    Debug = 'debug',
    CacheSweep = 'cacheSweep',
    ShardDisconnect = 'shardDisconnect',
    ShardError = 'shardError',
    ShardReconnecting = 'shardReconnecting',
    ShardReady = 'shardReady',
    ShardResume = 'shardResume',
    Invalidated = 'invalidated',
    StageInstanceCreate = 'stageInstanceCreate',
    StageInstanceUpdate = 'stageInstanceUpdate',
    StageInstanceDelete = 'stageInstanceDelete',
    GuildStickerCreate = 'stickerCreate',
    GuildStickerDelete = 'stickerDelete',
    GuildStickerUpdate = 'stickerUpdate',
    GuildScheduledEventCreate = 'guildScheduledEventCreate',
    GuildScheduledEventUpdate = 'guildScheduledEventUpdate',
    GuildScheduledEventDelete = 'guildScheduledEventDelete',
    GuildScheduledEventUserAdd = 'guildScheduledEventUserAdd',
    GuildScheduledEventUserRemove = 'guildScheduledEventUserRemove'
}
export enum EventParent {
    App = 'App',
    Guild = 'Guild'
}