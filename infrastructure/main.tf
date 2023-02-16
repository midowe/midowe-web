terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }

  backend "s3" {
    bucket         = "exodus-tf-state"
    encrypt        = true
    region         = "af-south-1"
    dynamodb_table = "exodus-tf-state-locking"
  }

  required_version = ">= 1.1.0"
}

provider "docker" {
  host     = "ssh://root@safehouze.xyz:22"
  ssh_opts = ["-o", "StrictHostKeyChecking=no", "-o", "UserKnownHostsFile=/dev/null"]

  registry_auth {
    address  = "registry.gitlab.com"
    username = var.registry_username
    password = var.registry_password
  }
}
