CREATE TABLE whats.chatbot (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pergunta` varchar(255) NOT NULL,
  `resposta` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE  whats.user (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;